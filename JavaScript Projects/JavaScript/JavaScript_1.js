function Color_Function() {  //This is a switch statement
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
            case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
            case "Green":
            Color_Output = "Green" + Color_String;
            break;
            case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
            case "Pink":
            Color_Output = "Pink" + Color_String;
            break;
            case "Purple":
            Color_Output = "Purple" + Color_String;
            break;
            default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output") .innerHTML = Color_Output;
}

function Hello_World_Function() {  //Get Elements by Class Name Method
    var A = document.getElementsByClassName ("Click");
    A [0] .innerHTML = "The text has changed!"; 
}

function my_Canvas () {  //This is my Element of Text for my Canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World" , 10,50);
}

function my_Linear() {  //This is my Gradient element in Canvas
    var c = document.getElementById("myLinear");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0,0,200,0);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(25,25,175,95);
}

