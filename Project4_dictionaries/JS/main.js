

function my_Dictionary() {
    var Car = {
        Year: "2005",
        Make: "Toyota",
        Model: "Tundra",
        Color: "Rust",
        Type: "Truck"
    };
    delete Car.Color;
    document.getElementById("Dictionary") .innerHTML = Car.Color;
}

    

