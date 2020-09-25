function full_Sentence() {  //Concatenate Method - connects two or more strings
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat (part_2, part_3, part_4);
    document.getElementById("Concatenate") .innerHTML = whole_sentence;
}

function slice_Method() {  //Slice Method - extracts a scetion of a string and returns it in a new section
    var Sentence="All work and no play makes Johnny a dull boy";
    var Section= Sentence.slice(27,33);
    document.getElementById("Slice") .innerHTML = Section;
}

function myFunction() {  //To change all to upper case
    var str = "The Weekend is Coming!";
    var res = str.toUpperCase();
    document.getElementById("demo") .innerHTML = res;
}

function my_Function() {  //Search Method
    var str = "Visit W3Schools!";
    var n = str.search ("W3Schools");
    document.getElementById("demos") .innerHTML = n;
}

function string_Method() {  //Number string method
    var X=182;
    document.getElementById("Numbers_to_string") .innerHTML = X.toString();
}

function newstring_Method() {  //Number string method
    var X=1111;
    document.getElementById("Numbers_to_string") .innerHTML = X.toString();
}

function precision_Method() {  //Precision Method
var X=12938.3012987376112;
document.getElementById("Precision") .innerHTML = X.toPrecision(10); 
}

function newprecision_Method() {  //My Precision string
var X=15872.36478521672;
document.getElementById("Precision") .innerHTML = X.toPrecision(12)
}

function new_Function() {  //toFixed() Method - converts a number into a string, rounding to a specified number of decimals
    var num = 42.59864;
    var n = num.toFixed(4);
    document.getElementById("dem") .innerHTML = n;
}

function newFunction() {
    var str="It is finally Friday!";
    var res = str. valueOf();
    document.getElementById("values") .innerHTML = res;
}