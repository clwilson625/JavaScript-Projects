var X=10;  //Global variable (outside of fundtion)
function Add_numbers_1() {
    document.write (20 + X + "<br>");
}
function Add_numbers_2() {
    document.write (X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_number_1() {  //Local variable (inside of function)
    var X=10;
    document.write (20 + X + "<br>");
}
function Add_number_2() {
    document.wrtie (X+100);
}
Add_numbers_1;
Add_numbers_2;


function get_Date() {  //If statement  if = true
    if (new Date() .getHours() >17) {
        document.getElementById("Greeting") .innerHTML = "How are you this evening?";
    }
}

function Age_Function() {  //Else Statement  else=false
    Age = document.getElementById("Age") .value;
    if (Age >=21) {
        Vote = "You are old enough to purchase alcohol!";
    }
    else {
        Vote = "You are not old enough to purchase alcohol!";
    }
    document.getElementById("How_old_are_you?") .innerHTML = Vote;
}

function Time_function() {  //Else If Statement - used if the 
    var Time = new Date() .getHours();
    var Reply;
if (Time <12 == Time > 0) {
    Reply = "It is morning time!";
}
else if (Time >12 == Time <18) {
    Reply = "It is afternoon";
}
else {
    Reply = "It is evening time.";
}
document.getElementById("Time_of_day") .innerHTML = Reply;
}