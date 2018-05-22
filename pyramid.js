// write a function that accepts a positive number N. 
// The function should log a pyramid shape. 
// Make sure the pyramid has spaces on both the left and the right hand. 
// examples 
// pyramid(2)
//    ' # '
//    '###'
// pyramid(3)
//    '  #  '
//    ' ### '
//    '#####'
// pyramid(4)
//    '   #   '
//    '  ###  '
//    ' ##### '
//    '#######'


function pyramid(rows) {
    let columns = rows*2 - 1;
    let midpoint = Math.floor((2*rows-1)/2);

    for (let row = 0; row < rows; row++) {
        let str = '';
        for (let col = 0; col < columns; col++) {
            if(col < (rows-1-row)) {
                str += ' ';
            }
            // For right side of middle point
            else if (col > (rows-1+row)) {
                str += ' ';
            }
            // For columns around middle point that should have "#"
            else {
                str += '#';
            }
        }  
        
        console.log(str);
    }
}

pyramid(2);
/*
    get the middle * by floor(column/2) == 2
    when row = 1, total rows - row = where the * starts, * ends at column - row = 5 - 2 = 3
*/
