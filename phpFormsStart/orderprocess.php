<?php
    $page = "Order Reciept";
    $path = "./";
    include $path."assets/inc/header.php";
?>

<h2>Your pizza order</h2>

<?php
    error_reporting(0);
    if(empty($_POST["customerID"])){                                           // Make sure customer ID isn't blank.
        echo "<p>You have to give me your customer ID!</p>";
        header("Location: orderform.php?name=" . $_POST['customerName']);    // Forwards the site back to orderform.php (w/ filled out name).
    }
    else{
        if(!is_numeric($_POST["customerID"])){                // Test if customerID is a number.
            echo "<p>Customer ID has to be a number...</p>";
            header("Location: orderform.php?name=" . $_POST['customerName']);
        }
        // Assume we have good data now.
        switch($_POST[pizzaSize]){
            case 'P':
                $cost = 7.99;
                $type = "Personal";
                break;
            case 'S':
                $cost = 10.99;
                $type = "Small";
                break;
            case 'M':
                $cost = 13.99;
                $type = "Medium";
                break;
            case 'L':
                $cost = 16.99;
                $type = "Large";
                break;
            default:               // If nothing matches.
                $cost = 13.99;
                $type = "Medium";
                break;   
        }
        // Switch for processing which toppings choice was made.
        switch($_POST[pizzaToppings]){
            case 'N':
                $costExtra = 0.00;
                break;
            case 'One':
                $costExtra = 2.00;
                break;
            case 'Two':
                $costExtra = 3.00;
                break;
            case 'Three':
                $costExtra = 3.75;
                break;
            default:
                $costExtra = 0.00;
                break;   
        }
        
        // Calc tax including extra toppings cost.
        $tax = ($cost + $costExtra) * 0.08;
        $total = $cost + $tax + $costExtra;
        // Output
        setLocale(LC_MONETARY, "en_US");   // Set location (for money), anything in all caps means its a constant (ex. it_IT would be Euros).
        // Jump in and out of php and html
        ?>
            <div id = "receipt">
                Your delicious pizza...
                <br/>
                Price:
                <?php
                    // Echo out the price breakdown.
                    echo 'Pizza Price: ' . money_format('%(#6n', $cost);
                    echo '<br/>Topping Price: ' . money_format('%(#6n', $costExtra);
                    echo '<br/>Tax amount: ' . money_format('%(#6n', $tax);
                    echo '<br/>Total Cost of your order is: ' . money_format('%(#6n', $total);
                ?>
            </div>

        <?php
    }
?>

<?php
    include $path."assets/inc/footer.php";
?>