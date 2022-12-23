// Global variables
var generateBtn = document.querySelector("#generate");
// set pool with starter values of true, false just to make it an array.  The .push() method only works correctly to add elements to an array if the variable is already an array.  The true, false elements will be popped out further down in the code.
var pool = [true, false];
// Boolean variables to determine whether to include each type of character in the password
var includeCaps;
var includeNumbers;
var includeLowercase;
var includeSpecial;

//the function that creates the password
function generatePassword() {
  //This step resets the value of pool so that prior iterations of the password generator do not affect the current iteration.
  var pool = [true,false];
  var length = prompt("How many characters should the password be?");
  console.log(length);
  //checks to confirm the length entered by the user is a number and is between 8 and 128.
  if(isNaN(length)===true) {
    confirm("Error, length must be a number.");
    return
  }
  if (length<8 || length >128) {
    confirm("Error, password must be between 8 and 128 characters");
    return
  } 
  var includeCaps = confirm("Should the password include Capital letters?  Select OK if yes, Cancel if no.");
  console.log(includeCaps);
  var includeLowercase = confirm("Should the password include lowercase letters?    Select OK if yes, Cancel if no.");
  console.log(includeLowercase);
  var includeNumbers = confirm("Should the password include numerical characters?  Select OK if yes, Cancel if no.");
  console.log(includeNumbers);
  var includeSpecial = confirm("Should the password include special characters?  Select OK if yes, Cancel if no.");
  console.log(includeSpecial);
  //check to make sure that at least one type of character was chosen.
  if (includeCaps===false && includeLowercase===false && includeNumbers===false && includeSpecial===false) {
    confirm("Error: must select at least one type of character to include.");
    return
  }
  //this is a series of if statements to create the pool of characters from which the password will be drawn.  Each group is added one at a time to the variable pool based on the inputs from the user.
  if (includeCaps) {
    pool.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  };
  console.log(pool);
  if (includeLowercase) {
    pool.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  };
  console.log(pool);
  if (includeNumbers) {
    pool.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  };
  console.log(pool);
  if (includeSpecial) {
    pool.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")");
  };
  console.log(pool);
  //two steps to remove the true, false elements from the start of the pool.
  pool.shift();
  console.log(pool);
  pool.shift();
  console.log(pool);
  //for loop to randomly generate the password based on all inputs so far.  It runs for i steps, where i is the length specified by the user.  At each step, a random number is chosen using the math.random method.  It is converted into an integer value to select one member of the pool array.  The loop then repeats.
  for (var i = 0; i <= length; i++) {
    var random = Math.floor(Math.random()*pool.length);
    console.log(random);
    if (i==0) {
      password=pool[random]
      console.log("Password for i=0: " + password)
    } else if (i<length) {
      password= password + pool[random];
      console.log("Password for i=" + i + ": " + password)
    }
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
