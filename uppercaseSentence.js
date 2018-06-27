// Return the sentence with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
    let newArray = str.split(' ');
  
    return newArray.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1, str.length).toLowerCase();
    }).join(' ');
  
  }
  