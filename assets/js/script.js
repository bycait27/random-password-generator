// Assignment Code
var generateBtn = document.querySelector("#generate");

// this function gives the user various prompts asking them about the criteria of their password
function promptUser() {
  var passwordLength = prompt("How long do you want your password to be? Please type a number between 8 and 128: ");
    // this if..else statement makes sure the user input a number that is not less than 8 or not more than 128
    // if this is true, their answer validated via an alert with their input displayed back to them
    // otherwise, the user will have to re-enter their input
    if (passwordLength < 8 || passwordLength > 128 || passwordLength === "") {
      alert("Please enter a number between 8 and 128.");
      // make the browser prompt the question again
    } else {
        alert(`You entered: ${passwordLength}.`);
    };
  var passwordCase = prompt("Type whether you would like your password to be in lowercase or uppercase: ");
    // this if..else statement makes sure the user input lowercase or uppercase
    // if this is true, their answer validated via an alert with their input displayed back to them
    // otherwise, the user will have to re-enter their input
    if (passwordCase === "lowercase" || passwordCase === "uppercase") {
      alert(`You entered: ${passwordCase}.`);
    } else {
        alert("Please enter lowercase or uppercase.");
      // make the browser prompt the question again
    };
  var characterNum = prompt("Type the numbers you would like to include in your password: ");
    // this if..else statement makes sure the user input is a number between 0 and 9
    // if this is true, their answer validated via an alert with their input displayed back to them
    // otherwise, the user will have to re-enter their input
    if (characterNum < 0 || characterNum > 9 || characterNum === "") {
      alert("Please enter a number between 0 and 9.");
      // make the browser prompt the question again
    } else {
        alert(`You entered: ${characterNum}.`);
    };
  var specialChar = prompt("Type any special characters you would like to include in your password: ");
    // this if..else statement makes sure the user input matches the special character criteria
    // if this is true, their answer validated via an alert with their input displayed back to them
    // otherwise, the user will have to re-enter their input
    if (specialChar === "~" || specialChar === "!" || specialChar === "@" || specialChar === "#" || specialChar === "$" || specialChar === "%" || specialChar === "^" || specialChar === "&" || specialChar === "*" || specialChar === "(" || specialChar === ")" || specialChar === "_" || specialChar === "-" || specialChar === "+" || specialChar === "=") {
      alert(`You entered: ${specialChar}.`);
    } else {
    alert("Please enter a character or multiple characters from the following: ~!@#$%^&*()_-+=.");
    // make the browser prompt the question again
    };
  };

// Write password to the #password input
function writePassword() {
  promptUser();
  // the following object stores the character set and its properties 
  const charSet = {
    // holds a string of uppercase letters
    upperCase: "ABCDEFGHIJKLMNOP",
    // holds a string of lowercase letters
    lowerCase: "abcdefghijklmnop",
    // holds a string of numbers 0-9
    numbers: "123456789",
    // holds common special characters used in secure passwords
    special: "~!@#$%^&*()_-+="
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
