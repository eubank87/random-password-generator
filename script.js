// When generate pw button is clicked:

// TODO: ask user how many characters do they need in their pw (8-128)
var passwordLength = prompt("How many characters does your password need?");

// TODO: store user input for total characters

// TODO: ask user if they want to include a number
var numbers = prompt("Does your password need a number?");

// TODO: store user input for numbers

// TODO: ask user if they want to include special characters
var specialChar = prompt("Does your password need a special character?");

// TODO: store user input for special characters

// TODO: ask user if they want to inclue lower case
var lowerCase = prompt("Do you want your password to include lower case letters?");

// TODO: store user infor for lower case

// TODO: ask user if they want upper case
var upperCase = prompt("Do you want your password to include upper case letters?");

// TODO: store user info for upper case 

// TODO: validate user input meets at least one criteria
// TODO: once all prompts are answered, password generates 
// TODO: pw is displayed in alert or directly on screen


// code below given by Joe at intro to hw. Expand!
function generatePassword(){
  return "password"
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
