// // Assignment Code
 
var generateBtn = document.querySelector("#generate");

// //Creatung an array of for password
var lowercase =  "abcdefghijklmnopqrstuvwuxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWUXYZ";
var numeric = "0123456789";
var specialChar = "!'()*+,-./:;<=>?@[\]^_`{|}~";

// I do know if I can add array in an array
var myArray = [lowercase, uppercase, numeric, specialChar];

// // Generate a random password using array 
var randPwd = myArray[Math.floor(Math.random()*myArray.length)];


function generatePassword(){
  return  randPwd = myArray[Math.floor(Math.random()*myArray.length)];
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
      var pwdLen = prompt("Choose the length of your password?");
       while (pwdLen > 128 || pwdLen < 8) {
       alert("Characters are least 8 characters long but not greater than 128.");
       pwdLen = prompt("Choose the length of your password?");
 
     }
       
 
       // Store users' input by cofirming their input 
        
        var confirmLowercase = confirm("Would you like your password to contain an lowercase letter? If yes, click ok if no, click cancel.");
        // console.log(confirmLowercase)

        var confirmUpperCase = confirm("Would you like your password to contain an uppercase letter? If yes, click ok if no, click cancel.");
        // console.log(confirmUpperCase)

        var confirmNumeric = confirm("Would you like your password to contain a Number? If yes, click ok if no, click cancel.");
        // console.log(confirmNumeric)

        var confrimSpecialChar = confirm("Would you like your password to contain a special characters? If yes, click ok if no, click cancel");
        // console.log(confirmSpechialChar)
      
 
      
  var password = generatePassword();
  console.log(lowercase[0])
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
     
    
    
  


  








