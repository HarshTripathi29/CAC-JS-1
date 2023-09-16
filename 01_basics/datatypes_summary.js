// Primitive
// Call by value (changes are made on the copy of the variables value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BifInt

// Reference type(Non Primmitive)
// Call by reference(changes are made on the original reference of the variable)
// Array, Object, Function
// Datatype of non primitives is function, object

// Javascript is statically types or dynamically typed.





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Stack(Primitive), Heap(Non-Primitive)

// Original value will not be changd in case of the primitives
let myYoutubeName = "harsh"

let anotherName = myYoutubeName

anotherName = "Tripathi"

console.log(myYoutubeName)
console.log(anotherName)

// Original value will be changed in case of the non primitives
let userOne = {
    email : "harsh@gmail.com",
    upi : "12345@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)