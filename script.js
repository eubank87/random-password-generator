// TODO: Create generatePassword function and write logic within this function

function generatePassword(){
  // Create array of CAP letters, lower letters, numbers and special characters
  var allNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppperCase = ["A","B", "C", "D","E","F","G","H","I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  // Create empty array to hold user requested input
  var chosenChar = [];

  // Create if statements that check if user says yes/no to different confirms, and based on response push those specific characters to our empty array

  var confirmNumbers = confirm("Does your password need numbers?");
  if(confirmNumbers){
    chosenChar = chosenChar + allNumbers;
  } 

  var confirmSpecialChar = confirm("Does your password need special characters?");
  if(confirmSpecialChar){
    chosenChar = chosenChar + specialChar;
  } 

  var confirmLowerCase = confirm("Does your password need lower case letters?");
  if(confirmLowerCase){
    chosenChar = chosenChar + lowerCase;
  } 

  var confirmUpperCase = confirm("Does your password need uppercase letters?");
  if(confirmUpperCase){
    chosenChar = chosenChar + uppperCase;
  } 
  console.log("final password", chosenChar)

  // ask user how many characters do they need in their pw (8-128)
  var passwordLength = parseInt(prompt("How many characters does your pasword need (must be between 8-128)?"));
  if(isNaN(passwordLength) === true){
    alert("Please enter a valid number bewteen 8-128")
    return 
  }
  if(passwordLength <8){
    alert("Password must be at least 8 characters long")
    return
  }
  if(passwordLength >128){
    alert("Password max character length is 128")
    return
  }
  console.log(passwordLength)

  // create a conditional to make sure user has chosen at least one type of character
  if(confirmNumbers === false && confirmSpecialChar === false && confirmLowerCase === false && confirmUpperCase === false){
    alert("Please choose at least one option");
    return
  }

  // Create var to hold the final results
  var finalPassword = [] 
  // console.log(finalPassword+chosenChar)

  // TODO: I need a for loop to loop over final array, it should run based on the results of the prompt when asked for password length, choose randomly from final array that holds all the characters user wants and save them to our ultimate password variable.

  for(var i = 0; i<passwordLength; i++){
    finalPassword.push(chosenChar[Math.floor(Math.random() * chosenChar.length)])
  }


  console.log(finalPassword)

  // TODO: Return final results to page, outside of for loop at end of function

  return finalPassword

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
