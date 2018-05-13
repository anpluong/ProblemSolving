// given an integer, return an integer that is the reverse ordering of numbers

/* 
Examples: 
reversedInt(15) === 51 
reversedInt(981) === 189
reversedInt(500) === 5
reversedInt(-15) === -51
reversedInt(-90) === -9

*/

// solution 1
// function reversedInt(number) {
    
//     var newArray = number.toString().split('').reverse();
    
//     for (let i = 0; i < newArray.length; i++) {
//       if (newArray[i] !== '0') {
//         break;
//       }
//       else {
//         i--;
//         newArray.shift();
//       }
//     }
       
//     let newInteger = parseInt(newArray.join('')) * Math.sign(number)

//     return newInteger;
// }

// solution 2 - I learned that whenever a string that has a leading number of 0, those 0 would be trimed when 
// parse into integer

function reversedInt(n) {
    let reversed = n.toString().split('').reverse().join('');
    
    return parseInt(reversed) * Math.sign(n)
}

// console.log(reversedInt(981));