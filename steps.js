/* 
    With N levels using the # character. Make sure the step n as spaces on the right hand side!
    steps(2) 
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'

    1. Loop i from 0 to n  # and add space for n - i

*/
// solution 1
// function stepsShapes(steps) {

//     let s = '';

//     for(let pos = 1; pos <= steps; pos++) {
//         // this will loop to log the # in each row
//         for (let move = 0; move < pos; move++) {
//             s = s + '#';
//         }
//         // this will loop to log the ' ' in each row
//         for (let space = steps.length - pos; space < steps; space++) {
//             s = s + " "; 
//         }
//         console.log(s);
//         s = ''
//     }
// }

// solution 2
function stepsShapes(steps) {
    for (let row = 0; row < steps; row++) {
        let stair = '';

        for (let column = 0; column < steps; column++) {
            if (column <= row) {
                stair += '#';                
            } else {
                stair += ' ';
            }
        }
            
    console.log(stair);
    }
}

stepsShapes(5)