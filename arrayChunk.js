/*
Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
    Examples
chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5, 6, 7], 10)
*/

// loop the array and add each iteration by n to the sIndex, and add that slice into the newArray. 
function chunk(arr, n) {
    let newArray = [];
  
    for (let sIndex = 0; sIndex < arr.length; sIndex = sIndex + n) { 
      newArray.push(arr.slice(sIndex, sIndex + n))
    }
    
    console.log(newArray)
}


chunk([1, 2, 3, 4, 5], 2)