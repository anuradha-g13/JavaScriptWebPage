function myFunction() {
    var x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("contactno").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1000000000 || x > 99999999999) {
        alert("Please provide a Valid Contact Number");
    } 
   
  }