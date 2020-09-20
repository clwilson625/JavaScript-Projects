document.write(-5E724);  //This is negative infinity

document.write(2E421); //This is infinity

document.write (27>5); //This shows true

document.write(17<3);  //This shows false

console.log (3 + 4);  //The answer shows in the console

document.write("14" + 7);  //Shows false - 2 different types of data

document.write(42<26);  //This shows false - 1st number is not smaller than second number

document.write(12 == 12);  //This shows true - the numbers are equal

document.write(6 == 19);  //This shows false - the numbers are not equal

X = 22;
Y = 22;
document.write(X ===Y);  //This is a comparison and results in true

X = 32;
Y = "32";
document.write(X === Y);  //This is a comparison and results in a false return - two different data types

A = "Summer";
B = "Summer";
document.write(A === B);  //This is a comparison and results in a true return 

document.write(7 > 3 && 15 > 6); //Using a logical operator - this displays true

document.write(5 > 10 && 10 > 4);  //Using a logical operator - this displays false

document.write(5 > 10 || 10 > 4);  //Logical operator - this displays true

document.write(5 > 10 || 10 > 20);  //Logical operator - this returns false - neither statement is true

function not_Function() {
    document.getElementById("Not") .innerHTML = ! (47 > 15);  //The NOT operator (!)  Returns False
}

function not_Function() {
    document.getElementById("Not") .innerHTML = ! (2 > 21);  //Another NOT operator - returns True
}