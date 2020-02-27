// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword (){
  let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let numbersList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let specialSymbol = ['!','#','$','%','&','*','+','-',':',';','?','@','_','~'];
  
  let upperCase = true
  let lowerCase = true
  let numbers = true
  let specialChar = true

  let upperPassword = ''
  let lowerPassword = ''
  let result = ''
  let specialPassword = ''
  let numberpassword = 0
  let finalpwd = ''
  let finalpwdlength = 0
  let lastPassword =''


  let passwordLength = prompt('How many characters do you want include in the password?');
  console.log(passwordLength)
  if (passwordLength >= 8 && passwordLength < 128) {
      upperCase = confirm('Do you want to use uppercase?');
      lowerCase = confirm('Do you want include lower case?');
      specialChar = confirm('Do you want use special character?');
      numbers = confirm('Do you want use numbers?');
      if (upperCase===true || lowerCase ===true || specialChar===true || numbers===true)
      {

            for (let i=0; i<passwordLength;i++){


             if (upperCase) {
                upperPassword = alpha[Math.floor(Math.random() * alpha.length)];
             }

             if (lowerCase) {
                lowerPassword = alpha[Math.floor(Math.random() * alpha.length)];
                result = lowerPassword.toLowerCase();
             }

             if (specialChar) {
                 specialPassword = specialSymbol[Math.floor(Math.random() * specialSymbol.length)];
             }

             if (numbers) {
                 numberPassword = numbersList[Math.floor(Math.random() * numbersList.length)];
             }

             finalpwd = finalpwd + upperPassword + result + specialPassword + numberpassword ;

             finalpwdlength=finalpwd.length;
            
             if (finalpwdlength >=passwordLength){
               i=passwordLength;
               lastPassword=finalpwd.substring(0,passwordLength);
             }

            }
          } 
          else{
            alert('You must select atleast one character')
          }
        
        } 
        else {
      alert('password must contain min 8 and max 128');
  }
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
