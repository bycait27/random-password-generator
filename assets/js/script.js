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

// add event listener to 'generate password' button
generateBtn.addEventListener("click", writePassword);

// writes password to the text box
function writePassword() {
  // prompts user with password criteria
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

    // makes empty string for password
    var newPassword = "";

    // adds the contents of upperCase to the empty newPassword string if user says yes to this confirm statement
    if (wantsUpperCase === true) {
      newPassword += upperCase;
    };
    // adds the contents of lowerCase to the empty newPassword string if user says yes to this confirm statement
    if (wantsLowerCase === true) {
      newPassword += lowerCase;
    };
    // adds the contents of numbers to the empty newPassword string if user says yes to this confirm statement
    if (wantsNumeric === true) {
      newPassword += numbers;
    };
    // adds the contents of special to the empty newPassword string if user says yes to this confirm statement
    if (wantsSpecial === true) {
      newPassword += special;
    };

    // makes empty string for new password
    var passwordFinal = "";

    // this for loop iterates through the length of the user's passwordLength input and makes a random string from the characters
    for (i = 0; i < passwordLength; i++) {
      passwordFinal += newPassword.charAt(Math.floor(Math.random() * newPassword.length));
      };

      // return new password generated based on user's input
      return passwordFinal;
  };

    // calls generatePassword function and gets the generated password
    var password = generatePassword();

    // sets a variable for this element id
    var passwordText = document.querySelector("#password");

    // inputs the value of password variable into the text box
    passwordText.value = password;
};