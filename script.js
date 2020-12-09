// When generate pw button is clicked:
// TODO: ask user how many characters do they need in their pw (8-128)
// TODO: ask user if they want to include a number
// TODO: ask user if they want to include special characters
// TODO: ask user if they want uppercase
// TODO: ask user if they want lowercase
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
