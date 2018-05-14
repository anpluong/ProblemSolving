/* Write a program that console logs the numbers from 1 to n. But for multiples of three, print 'fizz' instead of the number and for
multiples of five print 'buzz'. For numbers which are multiples of both 3 and 5 print 'fizzbuzz' 
The key modulus when n % a === 0 it means that n is a multiple of a */

function fizzBuzz(n) {
    for(let count = 1; count <= n; count++) {
        if (count % 5 === 0 && count % 3 === 0) {
            console.log('fizzbuzz');
            continue;
        }
        else if (count % 3 === 0)
            console.log('fizz')
        else if (count % 5 === 0) 
            console.log('buzz') 
        else 
            console.log(count)
    }
}

fizzBuzz(39);