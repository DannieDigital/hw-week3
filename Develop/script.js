// // Assignment Code
 
var generateBtn = document.querySelector("#generate");

// //Creatung an array of for password
var lowercase =  ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ["!'()*+,-./:;<=>?@[\]^_`{|}~"];

// I do know if I can add array in an array
var myArray = [lowercase, uppercase, numeric, specialChar];

// // Genterat a randome password using array 
var randPwd = myArray[Math.floor(Math.random()*myArray.length)];


// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  
  // Looping through eact item in the array to create a password
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
      if (pwdLen > 128 || pwdLen < 8) {
      alert("Characters are least 8 characters long but not greater than 128.");
    }

      // if password length is equal to or less than and equal to or greater 8 then have user enter length 
    else (pwdLen <= 128 && pwdLen >= 8){ 
      prompt("Choose the length of your password?");
    }

      // if user enter test then print text will need change
       var pwdChar = prompt("Choose character types to include in the password");
      if (pwdChar) {
        alert("Your passwaord is " + pwdChar);
        // alert("Your passwaord is " + randPwd); this may be more accurate 
      }

      // if user hits cancel then alert user
        else { 
          alert("Password must inlcude lowercase, uppercase, numeric, and/or special characters");
        }
      }
    }
     
    
    
  


  








