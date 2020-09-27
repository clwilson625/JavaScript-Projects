function count_To_Ten() {  //While loop - count down from 1 to 10
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten") .innerHTML = Digit;
}

function myFunction() {  //  String length property 
    var str = "Today is Sunday!";
    var n = str.length;
    document.getElementById("demo") .innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];  //For Loops
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments [Y] + "<br>";
    }
    document.getElementById("List_of_Instruments") .innerHTML = Content;
}

function cat_pics() {  //Arrays and Objects
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat") .innerHTML = "In this picture, the cat is " + Cat_Picture[2] + " . ";
}

function array () {  //My Array
    var array = [];
    array[0] = "grilling";
    array[1] = "fishing";
    array[2] = "eating";
    document.getElementById("array") .innerHTML = "While camping, we may be " + array[1] + " . ";
}

function constant_function() {  //Const Keyword
    const New_Car = {type:"SUV", brand: "Toyota", color: "red"};
    New_Car.color = "blue";
    New_Car.price = "$25,900";
    document.getElementById("Constant") .innerHTML = "The cost of the " + 
    New_Car.type + " was " + New_Car.price + " and was " + New_Car.color + " in color. ";
}

var X = 124;  //My "let" keyword
document.write(X);
{
    let X = 57;
    document.write ("<br>" + X);
}
document.write ("<br>" + X);



