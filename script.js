var allNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppperCase = ["A","B", "C", "D","E","F","G","H","I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// TODO: Create generatePassword function and write logic within this function

function generatePasswordData() {
  // TODO: Create array of CAP letters, lower letters, numbers and special characters

  // TODO: Create empty array to hold user requested input
  // var finalPassword = [];


  // TODO: Create if statements that check if user says yes/no to different confirms, and based on response push those specific characters to our empty array

  // ask user how many characters do they need in their pw (8-128)
  var passwordLength = parseInt(prompt("How many characters does your password need (please input a number from 8-128?"));
    if(isNaN(passwordLength) === true){
      alert("Please enter a valid number bewteen 8-128")
      return
    }
    if(passwordLength < 8){
      alert("Password must be at least 8 characters long")
      return
    }
    if(passwordLength > 128){
      alert("Password max characters is 128")
      return
    }
  
  
  var confirmNumbers = confirm("Does your password need a number?");

  // if(confirmNumbers){
  //   // TODO: store user input for numbers
  //   finalPassword = finalPassword + allNumbers;
  // }

  // ask user if they want to include special characters
  var confirmSpecialChar = confirm("Does your password need a special character?");
  // if(confirmSpecialChar){
  //   // TODO: store user input for special characters
  //   finalPassword = finalPassword + specialChar;
  // }


  // ask user if they want to inclue lower case
  var confirmLowerCase = confirm("Do you want your password to include lower case letters?");
  // if(confirmLowerCase){
  //   // TODO: store user infor for lower case
  //   finalPassword = finalPassword + lowerCase;
  // }


  // ask user if they want upper case
  var confirmUpperCase = confirm("Do you want your password to include upper case letters?");

  if(confirmNumbers === false && confirmSpecialChar === false && confirmLowerCase === false && confirmUpperCase === false){
    alert("Please choose at least one option");
    return 
  }



  var passwordOptions = {
    passwordLength:passwordLength, 
    confirmNumbers:confirmNumbers,
    confirmSpecialChar:confirmSpecialChar,
    confirmLowerCase:confirmLowerCase,
    confirmUpperCase:confirmUpperCase
  }
  return passwordOptions

  // TODO: create a conditional to make sure user has chosen at least one type of character

  // TODO: store user input for total characters

  // TODO: change user input from string to number







  // TODO: Create var to hold the final results

  // TODO: I need a for loop to loop over final array, it should run based on the results of the prompt when asked for password length, choose randomly from final array that holds all the characters user wants and save them to our ultimate password variable.

  // TODO: Return final results to page, outside of for loop at end of function




}
function randomSelect(array){
  var randomIndex = Math.floor(Math.random()*array.length)
  var randomElement = array[randomIndex]
  return randomElement
}

function generatePassword(){
  var options = generatePasswordData()
  var result = []
  var possibleChar = []
  var guaranteeChar = []
  if(options.confirmNumbers){
    possibleChar = possibleChar.concat(allNumbers)
    guaranteeChar.push(randomSelect(allNumbers))
  } 

  if(options.confirmSpecialChar){
    possibleChar = possibleChar.concat(specialChar)
    guaranteeChar.push(randomSelect(specialChar))
  } 

  if(options.confirmLowerCase){
    possibleChar = possibleChar.concat(lowerCase)
    guaranteeChar.push(randomSelect(lowerCase))
  } 
  if(options.confirmUpperCase){
    possibleChar = possibleChar.concat(uppperCase)
    guaranteeChar.push(randomSelect(uppperCase))
  } 


  for(var i = 0; i < options.length; i++){
    var possibleCharacters = randomSelect(possibleChar)
    result.push(possibleCharacters)
  }
  for(var i = 0; i < guaranteeChar.length; i++){
    result[i]= guaranteeChar[i]
  }
  return result.join("")
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
