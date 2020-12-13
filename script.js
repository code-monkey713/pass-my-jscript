// declaring variables with global use for simplicity in figuring out the code
var lower;
var upper;
var number;
var special;
var length;
var passwordEl = document.querySelector('#password');
var generateBtn = document.querySelector("#generate");

//function to write password to the #password input
function writePassword() {
  var password = '';
  var passLength = 0;

  //function for each individual password character
  function randomLowChar() {
    charSet = 'abcdefghijklmnopqrstuvwxyz';
    var randomString = '';
    var randomPosition = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPosition, randomPosition + 1);
    return randomString;
  }

  function randomUpperChar() {
    charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomString = '';
    var randomPosition = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPosition, randomPosition + 1);
    return randomString;
  }

  function randomNum() {
    charSet = '0123456789';
    var randomString = '';
    var randomPosition = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPosition, randomPosition + 1);
    return randomString;
  }

  function randomSpecialChar() {
    charSet = '~`!@#$%^&*()_+=[]\{}|<>?/.,';
    var randomString = '';
    var randomPosition = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPosition, randomPosition + 1);
    return randomString;
  }

  //loop to restrict end user to enter number from 8 to 128 characters for password
  do {
    length = parseInt(prompt('Enter the desired password length from 8 to 128 characters.'));
    if (isNaN(length)) {
      alert('You must enter a number!');
    }
    if (length < 8 || length > 128) {
      alert('You must choose a password length between 8 to 128 characters!');
    }
  } while (isNaN(length) || length < 8 || length > 128);

  alert(`Your password will contain ${length} characters.`);

  //begin questions for character types for password
  lower = confirm('Do you want lowercase (abc) characters in your password?');
  upper = confirm('Do you want UPPERCASE (ABC) characters in your password?');
  number = confirm('Do you want NUMBERS (123) in your password?');
  special = confirm('Do you want special characters (*%@) in your password?');

  //while loop in case user select no options for password type
  while (lower === false && upper === false && number === false && special === false) {
    alert('You must select at least one option!');
    lower = confirm('Do you want lowercase (abc) characters in your password?');
    upper = confirm('Do you want UPPERCASE (ABC) characters in your password?');
    number = confirm('Do you want NUMBERS (123) in your password?');
    special = confirm('Do you want special characters (*%@) in your password?');
  }

  //generate password from end user requirements
  for (var i = 0; i < length; i) {
    if (lower === true) {
      password += (randomLowChar());
      i++;
    }
    if (upper === true) {
      password += (randomUpperChar());
      i++;
    }
    if (number === true) {
      password += (randomNum());
      i++;
    }
    if (special === true) {
      password += (randomSpecialChar());
      i++;
    }
  }
  password = password.substring(0,length);
  passwordEl.textContent = password;

}

//event listener to generate passwrod button
generateBtn.addEventListener('click', writePassword);