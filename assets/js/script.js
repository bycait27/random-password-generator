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
  var passwordCharType = prompt("Which character type would you like to include in your password? Please type lowercase, uppercase, numeric, or special: ");
    // this if..else statement makes sure the user input a character type
    // if this is true, their answer validated via an alert with their input displayed back to them
    // otherwise, the user will have to re-enter their input
    if (passwordCharType === "lowercase") {
      alert(`You entered: ${passwordCharType}.`);
    } else if (passwordCharType === "uppercase") {
      alert(`You entered: ${passwordCharType}.`);
    } else if (passwordCharType === "numeric") {
      alert(`You entered: ${passwordCharType}.`);
    } else if (passwordCharType === "special") {
      alert(`You entered: ${passwordCharType}.`);
    } else {
      alert("Please enter a character type.");
      // prompt user again
    }
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
