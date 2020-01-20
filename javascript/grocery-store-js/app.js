// Grocery Store JS
// 29 MARCH 2016 on Exercise, Programming Principles, Level 1
// Write a program that has a shopper object. Include at least one property with each of the following data types as values to the properties:

// String
// Number
// Boolean
// Function (called a "method" when it's inside an object like this. Check out an example for help writing your own)
// In addition, you should add a groceryCart property to your object, which should be an Array of items that can commonly be found in a grocery cart.

var shooper = {
    firstName = "Jane",
    lastName = 'Smith',
    age = 21,
    isShopping = true,
    isNotShopping = false,
    groceryCart = ['fruits', 'veggies','drinks', 'silverware'],
    fullName: function () {
        return firstName + this.lastName;
    }
    

}