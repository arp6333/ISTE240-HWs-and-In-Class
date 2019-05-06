/** 
* Ellie Parobek
* 3/01/18
* EX06 JavaScript
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

/** 
* Example 06a
* Move Text: Each time the user clicks the “Move the Text” button, the text “I Move” moves 10 pixels to the right. 
*/

var move = document.getElementById('moveText');
move.style.left = '0px';

function right(){
    move.style.left = parseInt(move.style.left) + 10 +'px';
}

/**
* Example 06b
* Count element by type: Create the html form element shown in the code below. Then write the JavaScript code for the function 
* ‘howmany( )’ so that it counts how many total input elements are in the form, and how many input elements of type ‘text’ are in
* the form. Print these counts in an alert( ).
*/

function howMany(){
    var element = document.getElementById('countForm').getElementsByTagName('input');
    var total = element.length;
    var totalText = 0;
    for(var i = 0; i < element.length; i++){
        if(element[i].type== "text"){ 
            totalText++;
        }
    }
    alert("Total inputs: " + total + "\nTotal text inputs: " + totalText);
}

/**
* Example 06c
* Change the name of the function on the ‘onclick’ event to ‘colorchanger( )’ then code the colorchanger function to change the 
* background color of the div in which your HTML for this exercise resides to the color selected from the options. 
*/

function colorChanger(){
    var element = document.getElementById('mySelect2');
    var selected = element.selectedIndex;
    var color = element.options[selected].text;
    document.getElementById('colorForm').style.background = color;
}

/**
* Example 06d
* When the user rolls the mouse over the text it changes to the color of the selected option in Exercise 6c. 
*/

document.getElementById('colorChange').onmouseover = function(){colorChangerOver()};
document.getElementById('colorChange').onmouseout = function(){colorChangerOut()};

function colorChangerOver(){
    var element = document.getElementById('mySelect2');
    var selected = element.selectedIndex;
    var color = element.options[selected].text;
    document.getElementById('colorChange').style.color = color;
}
function colorChangerOut(){
    document.getElementById('colorChange').style.color="black";
}

/**
* Example 06e
* Change out the innerHTML by creating a Text Node instead.
*/

function changeNode(){
    document.getElementById('text2').firstChild.nodeValue = "Text changed.";
}
