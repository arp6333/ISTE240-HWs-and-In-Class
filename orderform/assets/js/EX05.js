/** 
* Ellie Parobek
* 2/16/18
* EX05 JavaScript
*/

/**
* Example 05a
*/
function jsStyle() {
		// function to change style
		// Change the color and the size of the font
		// in the paragraph with id='text'
        document.getElementById('text').style.color='red';
        document.getElementById('text').style.fontSize='25px';
}

/**
* Example 05b
*/
function getFormValues() {
		// function to send first and last names
		// to an 'alert' message.
        var first = document.getElementById('fname').value;
        var last = document.getElementById('lname').value;
	    alert("Name: " + first + " " + last);
}

/**
* Example 05c
*/
function getOptions() {
	// function to display the number of options in an alert()
    var num = document.getElementById("mySelect").length;
	alert(num + " options");

}

/**
* Example 05d
*/
//put a mouseover and a mouseout event on the p tag below
document.getElementById("rb").onmouseover = function(){mouseOver()};
document.getElementById("rb").onmouseout = function(){mouseOut()};
//create a function that is called on the mouseover that turns the text red
function mouseOver(){
    document.getElementById("rb").style.color="red";
}
//create a function that is called on the mouseout that turns the text black
function mouseOut(){
    document.getElementById("rb").style.color="black";
}

/**
* Example 05e
*/
// code two functions multiply and divide functions here
    //hints:
        //when you get a value out of an input, you are getting a string.  To get a number, use parseInt()
        //When you want to output something into the HTML you can use .innerHTML - like document.getElementById("result").innerHTML= "fred";
function multiply(){
    var one = document.getElementById('firstoperand').value;
    var two = document.getElementById('secondoperand').value;
    var ret = parseInt(one) * parseInt(two);
    document.getElementById('result').innerHTML=ret;
}
function divide(){
    var one = document.getElementById('firstoperand').value;
    var two = document.getElementById('secondoperand').value;
    var ret = parseInt(one) / parseInt(two);
    document.getElementById('result').innerHTML=ret;
}