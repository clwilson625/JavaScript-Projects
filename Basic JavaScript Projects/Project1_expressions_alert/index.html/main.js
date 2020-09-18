
window.alert("Hello, World!");

document.write ('Hello, world!');

var X = "Hello, world!"
    document.write(X);

var A = "This is a string";
var A = A.fontcolor("red");
    document.write(A);

document.write ("\"Be who you are and say what you feel,"
+ "because those who mind don\'t matter and those who matter don\'t mind.\""
+ "-Dr. Seuss");

document.write ("\"I am who I am and always will be,"
+ "and if you do not like it\, to bad");

var B= "Concatenated" + "Sring"
var B = B.fontcolor("green");
document.write(B)

var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine",
    Daughter = "Penny", Son = "Zorro";
var Dad = Dad.fontcolor("red");
document.write(Dad);


var myFamily = "The Wilsons", Dad = "David", Mom = "Carol",
    Son1 = "Dustin", Daughter1 = "Destiny", Son2 = "Jeremiah",
    Daughter2 = "Holly", Son3 = "Mark", Daughter3 = "Jessica",
    Daughter4 = "Casey";
var Son1 = Son1.fontcolor("orange");
document.write(Son1);

var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);

document.write(3+3);

// This is a function.  Click me changes to This text is green //
function My_First_Function () {     //Defining a function and naming it
    var str = "This text is green!";  //Defining a variable and giving it a
                                      //sting value  
    var result = str.fontcolor("green");  //Using the fontcolor method on str variable
    document.getElementById("Green_Text") .innerHTML = result; //Putting the value 
                                                        //of result into HTML element with "Green_Text" id
}
