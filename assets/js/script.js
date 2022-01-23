// Assignment Code
var generateBtn = document.querySelector("#generate");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numChars = "0123456789";
const specChars =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Handle if User selects no character types 
  if(password === undefined){
    alert("You selected no character types to include in your password."+
          " Please press Generate again, and select yes to at least one option");
    password = 'Press button again to generate password with characters';
  }

  passwordText.value = password;

}

generatePassword = () => {
  // Get user input for length,
  // then validate the length against requirements
  var passLength = ~~prompt("Please input a Password length integer equal to"+
                        " or greater than 8, and less than or equal to 128.");

  var validPass = false;
  (passLength>=8 && passLength <=128) ? validPass = true : validPass = false;

  while(!validPass){
    passLength = ~~prompt("Invalid number entered. Please input a number equal to or"+
                            " greater than 8, and less than or equal to 128.");
    (passLength>=8 && passLength <=128) ? validPass = true : validPass = false;
  }
  // Get user input to select character classes
  var useUppercase = confirm("Use Uppercase characters?");
  var useLowercase = confirm("Use Lowercase characters?");
  var useNum = confirm("Use Numbers?");
  var useSpecChar = confirm("Use Special Characters?");
  // If no is selected for all classes, return undefined
  if(!useUppercase && !useLowercase && !useNum && !useSpecChar){
    return undefined;
  }
  //build character bank, and pre seed with required characters.
  var mandatoryChars = [];
  var charBank;
  if(useLowercase){
    mandatoryChars.push( lowerChars[Math.floor(Math.random()*lowerChars.length)] );
    charBank = charBank + lowerChars;
  }
  if(useUppercase){
    mandatoryChars.push( upperChars[Math.floor(Math.random()*upperChars.length)] );
    charBank = charBank + lowerChars;
  }
  if(useNum){
    mandatoryChars.push( numChars[Math.floor(Math.random()*numChars.length)] );
    charBank = charBank + lowerChars;
  }
  if(useSpecChar){
    mandatoryChars.push( specChars[Math.floor(Math.random()*specChars.length)] );
    charBank = charBank + lowerChars;
  }

  //generate 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
