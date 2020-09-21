function addition_Function() {  //This is the addition function
    var addition = 7 + 12;
    document.getElementById("Math") .innerHTML = "7 + 12 = " + addition;
}

function subtraction_Function() {  //This is the subtraction function
    var subtraction = 26 - 14;
    document.getElementById("Math") .innerHTML = "26 - 14 = " + subtraction;
}

function multiplication() {  //This is the multiplication function
    var simple_Math = 16 * 4;
    document.getElementById("Math") .innerHTML = "16 * 4 = " + simple_Math;
}

function division() {  //This is the division function
    var simple_Math = 64 / 4;
    document.getElementById("Math") .innerHTML = "64 / 4 = " + simple_Math;
}
    
function moreMath() {  //This is a multi-function math
    var simple_Math = (7+3) * 7 / 2;
    document.getElementById("Math") .innerHTML ="7 plus 3 times 7 divide by 2 = " + simple_Math;
}

function remainder() {  //This is a modulus operator that leaves a remainder
    var simple_Math = 30 % 4;
    document.getElementById("Math") .innerHTML = "30 divide by 4 leaves a remainder of " + simple_Math;
}

function negation_Operator() {  //This shows the negation operator - it shows the opposite form of something
    var x = 10;
    document.getElementById("Math") .innerHTML = -x;  
}

var X = 7; //This uses the ++ to increase by one
X++;
document.write(X);

var X = 4.15; //This is the decreasing function -- to decrease by one
X--;
document.write(X);

window.alert(Math.random() * 100);  //This is a random number picker between 1 and 100 in a pop-up