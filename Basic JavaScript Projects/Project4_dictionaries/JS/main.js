
function my_Dictionary() {
    var Car = {
        Year: "2005",
        Make: "Toyota",
        Model: "Tundra",
        Doors: "4",
        Type: "Truck"
    };
    document.getElementById("Dictionary") .innerHTML = Car.Model;
}

function new_Dictionary() {
    var Car = {
        Year: "2005",
        Make: "Toyota",
        Model: "Tundra",
        Doors: "4",
        Type: "Truck"
    };
    delete Car.Doors;
    document.getElementById("Dictionary") .innerHTML = Car.Doors;
}



    

