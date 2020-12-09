// declaring variables for global use with VAR
var lowerCase = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, 'm', `n`, `o`, `p`, 'q', `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
var upperCase = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, 'M', `N`, `O`, `P`, 'Q', `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var sChar = [` `, `!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `\``];
var lower;
var upper;
var number;
var special;



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var length = prompt(`Enter the desired password length from 8 to 128 characters.`);
  if (length >= 8 && length <= 128) {
    alert( `You selected ` + length );
  } else {
    alert(`You have to choose between 8 and 128 characters!`);
  }

  lower = confirm(`Do you want lowercase (abc) characters in your password?`);
  upper = confirm(`Do you want UPPERCASE (ABC) characters in your password?`);
  number = confirm(`Do you want NUMBERS (123) in your password?`);
  special = confirm(`Do you want special characters (*%@) in your password?`);

  //var generatePassword;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
