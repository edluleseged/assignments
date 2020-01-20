//practice
// 1. Write a function that returns the sum of any two numbers you give it.


// 2. Write a function that takes a string such has "Joe" as an argument, and returns the string "Hello Joe"


// 3. Write a function that takes in a number as an argument, and returns the string "Even" if the number is even, and "Odd" if the number is odd.

// function myFunc(num){
//     if(num/2===0)
//     console.log('even')
//     else {
//         console.log('odd')
//     }
// }
//     // if(num/2===1) {
//     //     console.log('odd')
//     //     return
//     // }


// // myFunc(5)
// myFunc(88)
// myFunc(19836745)
// myFunc(20)

// function loopThroughArray(array){
    
//     for(var i = 0; i < Array.length; i++){
//         console.log(array[i])
//     }
// }

// loopThroughArray([1,2,3,4,5,6,7,8,9,10])


// Exercise - Functions
// 14 MAY 2015 on Exercise, JavaScript, Programming Principles, Level 2
// Functions are important building blocks in any language. They help ensure that your code follows the DRY principle and that you follow a design
//  principle called Separation of Concerns. Your functions should “do one thing and do it well” (McIlroy). These exercises will help strengthen your 
// function know-how.

// Write a function that accepts two numbers as parameters, and returns the sum.

// function sum(num1, num2) {
//     return num1 + num2
// }

// var result = sum(50,50)
// console.log(result)

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

// function largest(num1, num2, num3) {
//     return Math.max (num1, num2, num3)
// }

// var result = largest(20, 30, 50)
// console.log(result)


// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

// function evenOdd(num) {
//     if (num/2===0)
//     console.log('even')
//     else{
//         console.log('odd')
//     }
    
// }

// evenOdd[40]


// function loopThroughArray(num){
//     for (var i=0; i<loopThroughArray.length; i++){
//         if (num % 2===0)
//         console.log('even')
//         else{
//             console.log('odd')
//         }
//         return
//     }
// }

// loopThroughArray(55)
// loopThroughArray(10)


// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the
// string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function myFunc(data) {
    if (data.length <= 20){
        console.log (data + data)
    }
}


myFunc('hello')



// Optional Challenge
// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
// The first numbers are:

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// So if n were 6, the sum of 1+1+2+3+5+8 would be 20

// Don't hardcode the sequence.

// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. ( White spaces count as a letter )