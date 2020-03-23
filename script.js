// Assignment Code

 "use stict";

var generateBtn = document.querySelector("#generate");

// // //Creatng an array of for password
var lowercase =  ["abcdefghijklmnopqrstuvwuxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWUXYZ"];
var numeric = ["0123456789"];
var specialChar = ["!'()*+,-./:;<=>?@[\]^_`{|}~"];

// Created an array of arrays so that I can utilize arrays to generate a password but it is failing 
var myArray = [[lowercase], [uppercase], [numeric], [specialChar]];

// // // Generate a random password using array 
var randPwd = myArray[Math.floor(Math.random()*myArray.length) +1];


function generatePassword(){
  return  randPwd;
}

// // Write password to the #password input
function writePassword(event) {
  event.preventDefault()
     // alert user that about password generater 
     var pwd = alert("Let's Generate Your Password!");
    
     // prompt user to choose password length
     if (pwd) {
       prompt("Choose the length of your password?");
     }
 
 
      // prompt user to choose password length and validate if length is less than 8 or greater than 128 if true alert user to reenter number
      var pwdLen = prompt("Please Choose the length of your password");
       while (pwdLen > 128 || pwdLen < 8) {
       alert("Characters are least 8 characters long but not greater than 128.");
       pwdLen = prompt("Choose the length of your password?");
      }

       // Store users' input by confirming their input 
      confirm("You chose " + pwdLen + " as the length of your password")

       
        
        var pwdLowerChar = prompt("Would you like your password to contain a lowercase letter? If yes, type yes then click ok or if no, click cancel")
        if(pwdLowerChar){

        }

        confirm("Sure, we will add a lowercase to your password")
        // console.log(confirmLowercase)

         
        var pwdUpperChar = prompt("Would you like your password to contain an uppercase letter? If yes, type yes then click ok or if no, click cancel")
          if (pwdUpperChar) {
                      }

            confirm("Sure, we will add an uppercase to your password")
            // console.log(confirmUpperCase)

        var pwdNum = prompt("Would you like your password to contain a number? If yes, type yes then click ok or if no, then click cancel")
        if (pwdNum) {

          confrim("Sure, we will add an number to your password")
          // console.log(confirmNumeric)
        }
          

          var specialCharacters = prompt("Would you like your password to contain a special characters? If yes, type yes then click ok or if no, then click cancel")
          if (specialCharacters) {

          }
          confirm("Sure, we will add speical character to your password.");
          // console.log(confirmSpechialChar)
           
       
  var password = generatePassword();
  // console.log(lowercase[0])
  var passwordText = document.querySelector("#password"); 
  
  // Looping through each item in the array to create a password
  for (var i = 0; i < randPwd.length; i++) {
  }
    return passwordText.value = password;

}



// // Add event listener to generate button/ added function 
  generateBtn.addEventListener("click", writePassword);{
  function generateBtn() {

    // alert user that about password generater 
    var pwd = alert("Let's Generate Your Password!");
    
    // prompt user to choose password length
    if (pwd) {
      prompt("Choose the length of your password?");
    }


     // prompt user to choose password length and validate if length is less than 8 or greater than 128 if true alert user to reenter number
     var pwdLen = prompt("Choose the length of your password?");
      while (pwdLen > 128 || pwdLen < 8) {
      alert("Characters are least 8 characters long but not greater than 128.");
      pwdLen = prompt("Choose the length of your password?");
    

    }
      

      // if user enter test then print text will need change
       var pwdChar = prompt("Choose character types to include in the password");
      if (pwdChar) {
        alert("Your passwaord is " );
        // alert("Your passwaord is " + randPwd); this may be more accurate 
      }

      // if user hits cancel then alert user
        else { 
          alert("Password must inlcude lowercase, uppercase, numeric, and/or special characters");
        }
      }
    }
     
    
    
  


  








