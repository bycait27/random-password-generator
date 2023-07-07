// makes variable for the "generate" button
var generateBtn = document.querySelector("#generate");
// makes a variable for uppercase letters
var upperCase = "ABCDEFGHIJKLMNOP";
// makes a variable for lowercase letters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// makes a variable for numbers
var numbers = "123456789";
// makes a variable for special characters
var special = "~!@#$%^&*()_-+=";
// empty string for password
var newPassword = "";

// this function gives the user various prompts asking them about the criteria of their password
function generatePassword() {
  
  // prompts user to enter a number between 8 and 128
  var passwordLength = prompt("How long do you want your password to be? Please type a number between 8 and 128: ");
  
    // this if..else statement makes sure the user input a number that is not less than 8 or not more than 128
    // if this is true, their answer validated via an alert with their input displayed back to them
    // otherwise, the user will have to re-enter their input
    if (passwordLength < 8 || passwordLength > 128 || passwordLength === "") {
      alert("Please enter a number between 8 and 128.");
    } else {
        alert(`You entered: ${passwordLength}.`);
    };

  // makes the user confirm whether or not they want lowercase letters in their password
  var wantsLowerCase = confirm("Do you want your password to include lowercase characters?");
  // makes the user confirm whether or not they want uppercase letters in their password
  var wantsUpperCase = confirm("Do you want your password to include uppercase characters?");
  // makes the user confirm whether or not they want numbers in their password
  var wantsNumeric = confirm("Do you want your password to include numeric characters?");
  // makes the user confirm whether or not they want special characters in their password
  var wantsSpecial = confirm("Do you want your password to include special characters?");
  
  if (wantsUpperCase === true) {
    newPassword += upperCase;
  };
  if (wantsLowerCase === true) {
    newPassword += lowerCase;
  };
  if (wantsNumeric === true) {
    newPassword += numbers;
  };
  if (wantsSpecial === true) {
    newPassword += special;
  };
  };

function createPassword() {
  for (i = 0; i < passwordLength; i++) {
    var passwordFinal = newPassword.charAt(Math.floor(Math.random() * newPassword.length));
  };
}

// Write password to the #password input
function writePassword() {
  generatePassword();

var password = createPassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
