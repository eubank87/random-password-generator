

// code below given by Joe at intro to hw. Expand!
function generatePassword(){
  var password = []
  var nummbers = [0,1,2,3,4,5,6,7,8,9];
  var specialChar = ["!@#$%^&*"]
  var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
  var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

  // When window is opened:

  // ask user how many characters do they need in their pw (8-128)
  // TODO: set up rule for length of password
  var passwordLength = prompt("How many characters does your password need (please input a number from 8-128?");
  // console.log("Password Length", passwordLength);

  // TODO: store user input for total characters
  // TODO: change user input from string to number
  password.push(passwordLength);
  // console.log(password);

  // ask user if they want to include a number
  var confirmNumbers = confirm("Does your password need a number?");
  if(confirmNumbers){
    console.log("Numbers needed?", "Yes");
  }
  else{
    console.log("Numbers needed?", "No");
  }
  password.push(confirmNumbers);
  // console.log(password);

  // TODO: store user input for numbers

  // ask user if they want to include special characters
  var confirmSpecialChar = confirm("Does your password need a special character?");
  if(confirmSpecialChar){
    console.log("Special characters needed?", "Yes");
  }
  else{
    console.log("Special characters needed?", "No");
  }
  password.push(confirmSpecialChar);

  // TODO: store user input for special characters

  // ask user if they want to inclue lower case
  var confirmLowerCase = confirm("Do you want your password to include lower case letters?");
  if(confirmLowerCase){
    console.log("Lowercase needed?", "Yes");
  }
  else{
    console.log("Lowercase needed?", "No");
  }
  password.push(confirmLowerCase);

  // TODO: store user infor for lower case

  // ask user if they want upper case
  var confirmUpperCase = confirm("Do you want your password to include upper case letters?");
  if(confirmUpperCase){
    console.log("Uppercase needed?", "Yes");
  }
  else{
    console.log("Uppercase needed?", "No");
  }
  password.push(confirmUpperCase);
  console.log(password);

  // TODO: store user info for upper case 

  // TODO: validate user input meets at least one criteria

  // TODO: compile user input into one password
  // function passwordMaker(passwordLength,confirmNumbers,confirmSpecialChar,confirmLowerCase,confirmUpperCase);

  // TODO: once all prompts are answered, password generates 
  // TODO: pw is displayed in alert or directly on screen
    return password
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
