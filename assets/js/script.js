// Assignment Code
var generateBtn = document.querySelector("#generate");

const upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specChars =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(password === undefined){
    alert("You selected no character types to include in your password. Please press Generate again, and select yes to at least one option");
  }

  passwordText.value = password;

}

generatePassword = () => {
  var passLength = ~~prompt("Please input a number equal to or greater than 8, and less than or equal to 128.");

  var validPass = false;
  (passLength>=8 && passLength <=128) ? validPass = true : validPass = false;

  while(!validPass){
    passLength = ~~prompt("Invalid number entered. Please input a number equal to or greater than 8, and less than or equal to 128.");
    (passLength>=8 && passLength <=128) ? validPass = true : validPass = false;
  }

  var useUppercase = confirm("Use Uppercase characters?");
  var useLowercase = confirm("Use Lowercase characters?");
  var useNum = confirm("Use Numbers?");
  var useSpecChar = confirm("Use Special Characters?");
  if(!useUppercase && !useLowercase && !useNum && !useSpecChar){
    return undefined;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
