// given a string, return a new string with the reversed order of characters.

// reverse("apple") ==> elppa
// reverse("Greetings!") ==> !sgniteerG

// solution 1
// function reverse(str) {
//     // turn str to array and call reverse method on array and return a reverse string
//     return str
//     .split('')
//     .reverse()
//     .join('');
// }

// solution 2
// function reverse(str) {
//     let newStr = '';
//     for (let count = str.length - 1; count >= 0; count--) {
//         newStr += str.charAt(count);
//     }
//     return newStr;
// }

// solution 3
// function reverse(str) {
//     let reversed = '';

// ES6
//     for (let character of str) {
//         reversed = character + reversed;
//         console.log(reversed)
//     }
//     return reversed;
// }

// solution 4 - using reduce
function reverse(str) {
    return str.split("").reduce((reversed, character) => character + reversed, "");
}

console.log(reverse("apple!"));