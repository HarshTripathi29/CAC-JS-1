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


/***********operations*****************/

let value = 3
let negValue = -value
console.log(negValue)

// Arithmetic Operations
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**8)
console.log(2/3)
console.log(2%3)

// String Concatenation

let str1 = "Harsh"
let str2 = "Tripathi"
let str3 = str1 + str2
console.log(str3)

// tricky conversions
// String with number concatenation
// jo pahle ayega that would be the preferred datatype
console.log("1" + 2)
console.log("1" + "1" + 2)
console.log(1 + 2 + "2")
console.log(1 + "2")

// conversion to boolean
console.log(+true)
console.log(+"")