// this is an clean and excellent way to get the number of occurrence of a characters in an object

const string = "Hello";

const chars = {};

for (let char of string) {
    // if chars[char] is not defined, and it adds 1, this will lead to null, and we assign 1 to that chars[char]
    chars[char] = chars[char] + 1 || 1;

    // chars is an object of all the characters with the occurrences. 
    console.log(chars)
}