function getReceipt() {
    // This initializes our string so it can get passed from 
    //function to function, growing line by line into a rull receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {             //If the item is checked it will reference the selected size for the price
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }

    if (selectedSize === "Personal Pizza") {  //This is the price for each size pizza
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;      //The running total starts with the size of pizza that is chosen
    console.log(selectedSize+" = $"+sizeTotal+" .00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+" .00");
    // these variables will get passes on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {             //This is where it keeps tracks of the number of toppings checked
    var toppingTotal = 0;   
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;  //This tells you the first topping is free
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }   
    runningTotal = (runningTotal + toppingTotal);  //This shows the receipt and gives a print out of the toppings on the pizza
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+" .00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+" .00");
    document.getElementById("showText") .innerHTML=text1;
    document.getElementById("totalPrice") .innerHTML= "<h3>Total: <strong>$"+
        runningTotal+" .00"+"</strong></h3>";
};