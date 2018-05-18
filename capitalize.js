// Write a function that accepts a string. The function should capitalize the first letter of each word in the string
// and return the capitalized String. 
// ex: capitalize('a short sentence') --> 'A Short Sentence'
// capitalize('a lazy fox') --> 'A Lazy Fox'
// capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {
    let array = str.split(' ')
    let newString = '';

    for(let word of array) {     
        newString = newString + word[0].toUpperCase() + word.slice(1) + " "
    }
    return newString
}

console.log(capitalize('a lazy fox!'));
