/* Check to see 2 strings are anagram to each other
    for example: 
    anagrams('rail safety', 'fairy tales') === true
    anagrams('RAIL SAFETY', 'fairy tales') === true
    anagrams('Hi there', 'Bye there') === false
*/

// solution 1
// function anagrams(stringA, stringB) {
//     // replace all the non-alphanumeric charater to empty string and ignore the case-insensitive
//     // 
//     let newStr1 = stringA.replace(/[^\w]/gi,'').toLowerCase();
//     let newStr2 = stringB.replace(/[^\w]/gi,'').toLowerCase(); 
//     let obj1 = {}, obj2 = {};

  
//     if (newStr1.length !== newStr2.length) 
//       return false;
//     else {
//       for (let key in newStr1) {
//           obj1[key] = obj1[key] + 1 || 1;         
//           obj2[key] = obj2[key] + 1 || 1;
//       }
      
//       for (let key in obj1) {
//           if (obj1[key]!== obj2[key])
//             return false;
//       }
//       return true;
//     }
// }

// solution 2 - is excellent by taking advantage of sort and compare string

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

console.log(anagrams('RAIvL SAFETY2', 'fairy tales'));