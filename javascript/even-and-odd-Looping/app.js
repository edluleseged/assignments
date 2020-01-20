
// practice
//  var numbers = [1,2,3,4,5]

// for ( var i = 0; i < 100; i++) {
//     if (numbers[i]) ( 3 === 1) {
//         console.log (numbers [i])}
//     }


// even/odd looping assignment

// * Create a for loop that iterates through 101 numbers (from 0 - 100). 
// If the current iteration is an Odd number, print "Odd" to the console, 
// otherwise print "Even".

for (var i=0; i<101; i++){
    if (i % 2 === 1)
        console.log(i +' '+'odd')
    else {
        console.log(i + ' ' +'even')
    }
}