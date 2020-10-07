function myFunction() { //function for zipcode
    var x, text;

// Get the value of the input field with id="zipcode"
x = document.getElementById("zipcode").nodeValue;

// If number is less than 5 or greater than 5 Input not valid
if (isNaN(x) || x = 5 || x = 5) {
    text = "Input not valid";
} else {
    text = "Input OK";
}
document.getElementById("zipcode") .innerHTML = text;
}