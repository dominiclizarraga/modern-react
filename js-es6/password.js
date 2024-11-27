// Your task is to create a password validator factory
// Requirements:

// 1. Create a function called createPasswordValidator
// 2. This function should accept two parameters:
//    - minLength (minimum password length)
//    - requireSpecialChar (boolean, whether it requires at least one special character)
// 3. The function should return another function that validates passwords
// 4. The returned function should:
//    - Accept a password string as a parameter
//    - Return true if the password meets all criteria, false otherwise
// 5. The validation rules configured in step 2 should be "remembered" by the returned function


function createPasswordValidator(minLength, requireSpecialChar) {
  
  return function(passwordToValidate){
      // let hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(text);
      if (passwordToValidate.length >= minLength ) {
        if (requireSpecialChar) {
          return /[!@#$%^&*(),.?":{}|<>]/.test(passwordToValidate);
        }
      }
        return false
      }
      return false;
    }

// Example usage should work like this:
const validator1 = createPasswordValidator(8, true);
const validator2 = createPasswordValidator(6, false);

console.log(validator1("shortrrrr!")); // Should check against minLength 8 and require special char
console.log(validator2("simple")); // Should check against minLength 6 and NOT require special char