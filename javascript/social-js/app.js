// Social.js
// 03 MAY 2016 on Exercise
// Create a model to represent the database of a new social media platform you're creating. It can be about whatever you want, but it needs the following:

// At least 3 nested levels of data (including objects and arrays)
// At least 1 method
// Span across at least 50 lines of code. (No empty lines)

var user = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 21,
    friends: ['Peter', 'Paul','John', 'Judas'],
    isConnected: true,
    friendRequest: function (){
        console.log(friendRequest)
    },
    favUser: 
    {
        name: 'Ashley',
        lastName: 'Adams',
        age: 32,
        isConnected: true,
        friends: ['Mary', 'Kate', 'Rooney','Ronaldo'],
        friendRequest: function (){
            console.log(friendRequest)
        },
        favUser:[
            {
                name: 'Sarah',
                lastName: 'Sanders',
                age: 26,
                isConnected: false,
                friends: ['Jose','Micheal','Sam','Susan'],
                friendRequest: function (){
                    console.log(friendRequest)
                },
                favUser: [
                    {
                        name: 'Crystal',
                        lastName: "Camron",
                        age: 33,
                        isConnecte: true,
                        friends: ['Trey', 'Trinity'],
                        friendRequest: function (){
                            console.log(friendRequest)
                        },
                        favUser:'none'
                    }
                ]

            }
        ]
        
    }
    
}


// After you create the base object, you need to:
// Add 2 properties to one of the objects (doesn't matter what level of nested data you do this to)
// in order to solve problem watch again lecture - javascript objects part one and two
user.jane.isNoLongerConnected = true

conosole.log(perosn.name['Jane'])


// Add 2 items to at least one of the arrays in your data
