// -- directions ---
// Given a string, return the character that is most commonly used in the string. 
// examples: 
// maxChar('abcccccccd') === 'c'
// maxChar('apple 1231111') === 1

// solution 1
function maxChar(str) {
    var newObj = {};
    // assign the number of the repeated letter to max, and the variable newLetter for that repeated letter
    let max = 0;
    let newLetter = '';

    for (let letter of str) {
        newObj[letter] = newObj[letter] + 1 || 1 
        // compare the letter occurrence with the max, if it is greater than max, assign that max to the letter and 
        // assign that letter to newLetter

        if (newObj[letter] > max) {
            max = newObj[letter];
            newLetter = letter;
        }
    }

    return newLetter
}

console.log(maxChar('abcccccccd'));

// solution 2. using another for ... in loop, use key and access the value and then compare with the max. 

// for (let key in newObj) {
//     if (newObj[key] > max) {
//         max = newObj[key] 
//         newLetter = key;
//      }
//    }


