function My_Function () {
    var str = "My first function is blue!";
    var result = str.fontcolor("blue");
    document.getElementById("Blue_Text") .innerHTML = result;
}


// This is a function.  Click me changes to This text is green //
function My_First_Function () {     //Defining a function and naming it
    var str = "This text is green!";  //Defining a variable and giving it a
                                      //sting value  
    var result = str.fontcolor("green");  //Using the fontcolor method on str variable
    document.getElementById("Green_Text") .innerHTML = result;
}

function My_Function () {       //Function and Name
    var sentence = "I am learning"; //Variable and giving it a string value
    sentence += " a lot from this book!";   //Using the += operator
    document.getElementById("Concatenate") .innerHTML = sentence;
}

function My_First_Function () {     //Another function and name
    var sentence = "I have a purpose";  //Another variable and string value
    sentence += " and that purpose is to learn!";       //Using the += operator
    document.getElementById("Purpose") .innerHTML = sentence;
}

function addition_Function()    {
    var addition = 2+2;
    document.getElementById("Math") .innerHTML = "2+2=" + addition;
}