// Create variable for password length
var passwordLength = Number(prompt("How long do you want your password (please choose a number between 8-128)?"));
console.log("password length:", passwordLength);

var passwordCombo = "";
// Create confirm for numbers needed or not
var confirmNumbers = confirm("Does your password need a number?");
if(confirmNumbers){
  passwordCombo = "0123456789";
}
else{
  passwordCombo = "";
}
console.log(passwordCombo);

// // Create confirm for special characters
// var confirmSpecialChar = confirm("Does your password need a special character?");
// if(confirmSpecialChar){
//   console.log("Special characters needed?", "Yes");
// }
// else{
//   console.log("Special characters needed?", "No");
// }

// // Create confirm for lower case
// var confirmLowerCase = confirm("Do you want your password to include lower case letters?");
// if(confirmLowerCase){
//   console.log("Lowercase needed?", "Yes");
// }
// else{
//   console.log("Lowercase needed?", "No");
// }

// // Create confirm for upper case
// var confirmUpperCase = confirm("Do you want your password to include upper case letters?");
// if(confirmUpperCase){
//   console.log("Uppercase needed?", "Yes");
// }
// else{
//   console.log("Uppercase needed?", "No");
// }



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
