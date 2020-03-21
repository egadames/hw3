
var upperCheckbox = document.querySelector('input[value="upper"]');
var specialCheckbox = document.querySelector('input[value="special"]');
var lowerCheckbox = document.querySelector('input[value="lower"]');
var numberCheckbox = document.querySelector('input[value="number"]');
var generateBtn = document.querySelector("#generate");
var list = "";

// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function getlist(){
    if(upperCheckbox.checked) {
      list += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
      if(numberCheckbox.checked) {
      list += '0123456789';
    }
        if(lowerCheckbox.checked) {
      list += 'abcdefghijklmnopqrstuvwxyz';
    }
        if(specialCheckbox.checked) {
      list += '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';  
    }
    return(list)
  }

function randomChar(str){
  var character = Math.floor((Math.random() * str.length));
  return str.charAt(character);
}

function generatePassword(){
  var password = "";
  var all = getlist();
  console.log(all)

  
  do {
    var size = prompt("What is the size of the password? No smaller than 8 // No larger than 128")
  }
  while (size < 8 || size > 128)

      
  if(upperCheckbox.checked) {
    password += randomChar('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }
    if(numberCheckbox.checked) {
    password += randomChar('0123456789');
  }
      if(lowerCheckbox.checked) {
    password += randomChar('abcdefghijklmnopqrstuvwxyz');
  }
      if(specialCheckbox.checked) {
    password += randomChar('!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~');  
  }

  var checkedChar = password.length;

  for (var i = 0; i < (size - checkedChar); i++) {    
      password += randomChar(all);
    }

  return(password);
}

// Add event passwordener to generate button
generateBtn.addEventListener("click", writePassword);



