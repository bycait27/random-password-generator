// Assignment Code
var generateBtn = document.querySelector("#generate");

// this function gives the user various prompts asking them about the criteria of their password
function promptUser() {
  var passwordLength = prompt("How long do you want your password to be? Please type a number between 8 and 128: ");
  var passwordCase = prompt("Type whether you would like your password to be in lowercase or uppercase: ");
  var characterNum = prompt("Type the numbers you would like to include in your password: ");
  var specialChar = prompt("Type any special characters you would like to include in your password: ");
}

// Write password to the #password input
function writePassword() {
  promptUser();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
