// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordcharacter = {
  passwordNumber: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  passwordLowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",],
  passwordUppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",],
  passwordSpecial: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"],
  passwordLength: 0,
}


function windowPrompt() {
  var specialcharacters = confirm("Click OK to confirm including special characters.");

  var number = confirm("Click OK to confirm including numeric characters.");

  var lowercase = confirm("Click OK to confirm including lowercase characters.");

  var uppercase = confirm("CLick OK to confirm including uppercase characters.");
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = pw;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function generatePassword() {

  var pw = "";
  var passwordlength = 0;
  var uppercase;
  var lowercase;
  var number;
  var specialcharacters;

  passwordlength = 0;
  passwordcharacter.passwordLength = 0;
  pw = "";


  var passwordlength = prompt("How many characters would you like your password to contain?");
    if (passwordlength < 8) {
      alert("Password length must be at least 8 characters");
      return;
    } else if (passwordlength > 129) {
      alert("Password length must less than 129 characters");
      return;
    } {
        password.length = passwordlength;
        windowPrompt();
          if (specialcharacters === false && number === false && lowercase === false && uppercase === false) {
            alert("You must confirm at least one character.");
            windowPrompt();
          }
          else {
            if (specialcharacters === true && passwordcharacter.passwordLength < passwordlength) {
              var specialPassword = passwordcharacter.passwordSpecial[Math.floor(Math.random() * 32)];
              pw = pw + specialPassword;
              passwordcharacter.passwordLength++;
            }
          

            if (number === true && passwordcharacter.passwordLength < passwordlength) {
              var numberPassword = passwordcharacter.passwordNumber[Math.floor(Math.random() * 10)];
              pw = pw + numberPassword;
              passwordcharacter.passwordLength++;
            }

            if (lowercase === true && passwordcharacter.passwordLength < passwordlength) {
              var lowercasePassword = passwordcharacter.passwordLowercase[Math.floor(Math.random() * 26)];
              pw = pw + lowercasePassword;
              passwordcharacter.passwordLength++;
            }

            if (uppercase === true && passwordcharacter.passwordLength < passwordlength) {
              var uppercasePassword = passwordcharacter.passwordUppercase[Math.floor(Math.random() * 26)];
              pw = pw + uppercasePassword;
              passwordcharacter.passwordLength++;
            }

          }

    return pw;    
    }
 
}

  