function getReceipt() {
    //this initializers our string so it can get passed from 
    //function to function, growing line by line int a full receipt
     var text1 = "<h3>You Ordered:</h3>";//disples the "You ordered:" header
     var runningTotal = 0;//the total for the order  starts at 0;
     var sizeTotal = 0;// the total for the pizza size starts at 0
     var sizeArray = document.getElementsByClassName("size");//puts the pizza size in an array 
     for (var i = 0; i < sizeArray.length; i++) {//loops through the size options to determine which was selected
         if (sizeArray[i].checked) {//if a size in the arreay is selected...
             var selectedSize = sizeArray[i].value;//grab the optionand set it to "selectedSize"
             text1 =  text1+selectedSize+"<br>";//append the size selected to the "You Ordered:" receipt
         }
     }
     if (selectedSize === "Personal Pizza") {//if personal option is selected
         sizeTotal = 6;//sizeTOtal is equak to 6 dollars
     } else if (selectedSize === "Small Pizza") {//''
         sizeTotal = 8;// 8dollars
     } else if (selectedSize === "Medium Pizza") {
         sizeTotal = 10;//10 dollars
     } else if (selectedSize === "Large Pizza") {
         sizeTotal = 14; ///14dollars
     } else if (selectedSize === "Extra Large Pizza") {
          sizeTotal = 16;//16 dollars
      }
      runningTotal = sizeTotal;//becuase size is the only thing to pick from so far the sizeTOtal is the runningToTal
      console.log(selectedSize+" = $"+sizeTotal+".00");//shows the selectedSize and the total to the console
      console.log("size text1: "+text1);
      console.log("subtotal: $"+runningTotal+".00");///shwos the sub total thus far
      //these variables will get passed on to each function
      getTopping(runningTotal, text1);// passes variables on to the next function to continue adding to the runningTOTal and the receipt
};

function getTopping(runningTotal, text1) {//starts tadding the selected toppings to the total and receipt
    var toppingTotal = 0;//toppingTOtal starts at 0
    var selectedTopping = [];// the topping options are grouped int an array variable
    var toppingArray = document.getElementsByClassName("toppings");//adds the opptions from the html to the array
    for (var j = 0; j < toppingArray.length; j++) {//loops through the toppings to determine which are selected
        if (toppingArray[j].checked) {//grabs all the selected opetions
            selectedTopping.push(toppingArray[j].value);//adds selected options value to the array 
            console.log("Selected Topping Item: ("+toppingArray[j].value+")");// dispalys the toppings selected to ethe console 
            text1 = text1+toppingArray[j].value+"<br>";//adds the seelected toppings to the onmgoing receipt
        }
    }
    var toppingCount = selectedTopping.length;//the number of toppings put into a variable
    if ( toppingCount > 1) {// if the numebr of toppings are greater than one(one free topping)
        toppingTotal = (toppingCount - 1);// add the number selected minus the free topping to the topping total
    } else {
        toppingTotal = 0;// or if number of toppings is only one or less keep the total at 0
    }
    runningTotal = (runningTotal + toppingTotal);//add the toppingTOtal to the running total 
    console.log("Total Selected Topping Items: "+toppingCount);// display the number of tooppings to the console
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");//toppingCount -1 = $$ added to runningTotal
    console.log("Topping text1: " +text1);//adds to the receipt 
    console.log("Purchase Total: "+"$"+runningTotal+".00");//displays total purchsase to console
    document.getElementById("showText").innerHTML=text1;// displays receipt to the document 
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>";//shows the formatted receipt and final total of pizza
};

