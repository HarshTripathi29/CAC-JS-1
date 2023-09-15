// conversion of string 
let score = "33abc"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof (valueInNumber))
console.log(valueInNumber) // cannot convert a string to a number

// conversion of null

let score2 = null
let valueInNumber2 = Number(score2)
console.log(typeof(score2))
console.log(score2)


// conversion of booleam values 
let isLoggedIn = "harsh"
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))


// 33 => 33
// 33 => NaN (type = number)
// true => 1 ; false => 0
// "" => false ; "harsh" => true