var generateBtn = document.querySelector("#generate");
var password = generatePassword();
console.log(password)
var passwordText = document.getElementById("#password"); 
  

function generatePassword(){
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
          'abcdefghijklmnopqrstuvwxyz0123456789@#$' + '0123456789'; 
    
  for (i = 1; i <= 8; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
} 


// // Add event listener to generate button/ added function 
generateBtn.addEventListener("click", writePassword);{
function generateBtn() {
 

    }
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
 
 
      // prompt user to choose password length and validate if length is less than 8 or greater than 128 if false alert user to reenter number
      var pwdLen = prompt("Please Choose the length of your password");
       while (pwdLen > 128 || pwdLen < 8) {
       alert("Characters are least 8 characters long but not greater than 128.");
       pwdLen = prompt("Choose the length of your password?");
      }

       // Store users' input by confirming their input 
      confirm("You chose " + pwdLen + " as the length of your password")

       
        
        var pwdLowerChar = confirm("Would you like your password to contain a lowercase letter? If yes, click ok or if no, click cancel")
        if (pwdLowerChar === true){
        
        }   
        
        var pwdUpperChar = confirm("Would you like your password to contain an uppercase letter? If yes, type yes then click ok or if no, click cancel")
          if (pwdUpperChar === true) {
                      }

            
        var pwdNum = confirm("Would you like your password to contain a number? If yes, type yes then click ok or if no, then click cancel")
        if (pwdNum === true) {

        }
          

          var specialCharacters = confirm("Would you like your password to contain a special characters? If yes, type yes then click ok or if no, then click cancel")
          if (specialCharacters === true) {

            document.getElementById("password").innerText = password;

          }
        }
