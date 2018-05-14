/*
Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
    Examples
chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5, 6, 7], 10)
*/

// sol 1 - loop the array and add each iteration by n to the sIndex, and add that slice into the newArray. 
// function chunk(arr, n) {
//     let newArray = [];
  
//     for (let sIndex = 0; sIndex < arr.length; sIndex = sIndex + n) { 
//       newArray.push(arr.slice(sIndex, sIndex + n))
//     }
    
//     console.log(newArray)
// }

function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        debugger
        const last = chunked[chunked.length -1];

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
}
chunk([1, 2, 3, 4, 5], 2)