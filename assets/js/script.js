// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passLength = ~~prompt("Please input a number equal to or greater than 8, and less than or equal to 128.");

  var validPass = false;
  passLength>=8 && passLength <=128 ? validPass = true : validPass = false;

  while(!validPass){
    passLength = ~~prompt("Invalid number entered. Please input a number equal to or greater than 8, and less than or equal to 128.");

  }

  var useUppercase = confirm("Use Uppercase characters?");
  var useLowercase = confirm("Use Lowercase characters?");
  var useNum = confirm("Use Numbers?");
  var useSpecChar = confirm("Use Special Characters?");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
