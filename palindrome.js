// given a string, return true if the string is a palindrome or false if it is not. 
// Palindromes are strings that form the same word if it is reversed. 
// Do include spaces and punctuation in determining if the string is a palindrome.

// palindrome("abba") === true;
// palindrome("abcdefg") === false


// solution 1: this is what comes up to my mind
// function palindrome(str) {
//     //
//     let strArray = str.split(''); 
//     let reversedArray = str.split('').reverse(); 

//     let flag = 0;
//     for (i = 0; i < strArray.length; i++) {
//         if (strArray[i] !== reversedArray[i])
//             flag++;
//     }
//     return flag = flag == 0 ? true : false
// }

// solution 2: take advantage of helper function every

// function palindrome(str) {
//     let strArray = str.split('');
    
//     return strArray.every((str, index) => {
//         return str === strArray[strArray.length-index-1];
//     })    
// }

// solution 3: use reverse function

function palindrome(str) {
    let reversedArray = str.split('').reverse().join();
    let strArray = str.split('');
    return strArray == reversedArray
}

// console.log(palindrome("abba"));