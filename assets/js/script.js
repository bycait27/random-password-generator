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
  // makes the user confirm whether or not they want lowercase letters in their password
  var passwordLowerCase = confirm("Do you want your password to include lowercase characters?");
  // makes the user confirm whether or not they want uppercase letters in their password
  var passwordUpperCase = confirm("Do you want your password to include uppercase characters?");
  // makes the user confirm whether or not they want numbers in their password
  var passswordNumeric = confirm("Do you want your password to include numeric characters?");
  // makes the user confirm whether or not they want special characters in their password
  var passwordSpecial = confirm("Do you want your password to include special characters?");
  
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
