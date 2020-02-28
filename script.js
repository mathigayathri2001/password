// Assignment Code
let generateBtn = document.querySelector("#generate");

// generate passowrd
function generatePassword ()
{
  // array to generate random characters
  let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let specialSymbol = ['!','#','$','%','&','*','+','-',':',';','?','@','_','~'];
  
  // boolean variables for validating user selection on character types
  let upperCase   = true;
  let lowerCase   = true;
  let numbers     = true;
  let specialChar = true;
 
  // variables used for password manipulation
  let upperPassword   = '';
  let lowerPassword   = '';
  let specialPassword = '';
  let numberPassword  = 0 ;
  let finalpwd        = '';
  let finalpwdlength  = 0 ;
  let lastPassword    = ''; 

  // prompt to receive lenght of the passowrd
  let passwordLength = prompt('How many characters do you want include in the password?');
  if (passwordLength >= 8 && passwordLength < 128) {
    // confrming user selection on character types
      upperCase = confirm('Do you want to use uppercase?');
      lowerCase = confirm('Do you want include lower case?');
      specialChar = confirm('Do you want use special character?');
      numbers = confirm('Do you want use numbers?');
      // cheack and make sure atlest one character to choose
      if (upperCase===true || lowerCase ===true || specialChar===true || numbers===true)
      {
           // loop through until the password length is reached,randomly generate each type of character
           for (let i=0; i<passwordLength;i++){

             // random generate for upper case           
             if (upperCase) {
                upperPassword = alpha[Math.floor(Math.random() * alpha.length)];
             }

             // random generate for lower case
             if (lowerCase) {
                lowerPassword = alpha[Math.floor(Math.random() * alpha.length)];
                lowerPassword = lowerPassword.toLowerCase();
             }

             // random generate for special character
             if (specialChar) {
                 specialPassword = specialSymbol[Math.floor(Math.random() * specialSymbol.length)];
             }

             // random generate for numbers
             if (numbers) {
                 numberPassword = Math.floor(Math.random() * 10);
             }

             // concatenate each charater for the loop
             finalpwd = finalpwd + upperPassword + lowerPassword + specialPassword + numberPassword ;
             finalpwdlength=finalpwd.length;
             
             // if the concatenate length each loop reaches the maximum length 
             // extract the exact password length and exit the loop 
             if (finalpwdlength >=passwordLength){
               i=passwordLength;
               lastPassword=finalpwd.substring(0,passwordLength);
             }

            }
          } 
          else{ 
            // validation message to choose one character
            alert('You must select atleast one character')
          }
        
        } 
        else {
          // validation message to choose passowrd length between 8 and 128
      alert('Password must contain min 8 and max 128');
  }
  // return the passowrd
  return lastPassword;
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
