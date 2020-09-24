
function Voter_Function() {  //Voter age verification
    var Age, Can_vote;
    Age = document.getElementById("Age") .value;
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote") .innerHTML = Can_vote + " to vote.";
}

function Ride_Function() {  //Ride height verification
    var Height, Can_ride;
    Height = document.getElementById("Height") .value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride") .innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {  //Constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 1019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors") .innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + " colored " + Erik.Vehicle_Model + " model " +   
    " manufactured in " + Erik.Vehicle_Year;
}

function Person(First, Last, Age, Eye) {  //New Constructor Function
    this.Person_First = First;
    this.Person_Last = Last;
    this.Person_Age = Age;
    this.Person_Eye = Eye;  
}
var Dad = new Person("Bob", "Smith", 52, "blue");
var Mom = new Person("Sally", "Jones", 42, "brown");
var Brother = new Person("Tommy", "Wilson", 38, "green");
function myFunctiona() {
    document.getElementById("Keywords_and_Constructors") .innerHTML =
    "Mom is " + Mom.Person_Age + " years old." + "Her last name is " + Mom.Person_Last;
}


function count_Function() {  //Count function - nested
    document.getElementById("Counting") .innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}

function  counting_Function() {  //My count function - nested 
    document.getElementById("Nested") .innerHTML = Count();
    function Count() {
        var Starting_point = 27;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}






