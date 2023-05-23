function calculate() {
    //fetching the info
      var value1 = parseFloat(document.getElementById("value1").value);
      var value2 = parseFloat(document.getElementById("value2").value);
      var operation = document.getElementById("operation").value;
  
      // if statements that calculate info given
      var result; //declare result variable for console
      if (operation === "+") { // if operation = plus
        result = value1 + value2; // run val1 + val2
      } else if (operation === "-") { // else if operation = minus
        result = value1 - value2;// run val1-val2
      } else if (operation === "/") { //else if operation = divide
        result = value1 / value2; //run val 1 divide val 2
      } else if (operation === "*") { // else if operation = multiply
        result = value1 * value2; // run val one times val 2
      }
  
      // Display the result in the console
      console.log("Result: " + result);
    }
      