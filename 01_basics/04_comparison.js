console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2>=1)
console.log(2==1)
console.log(2!=1)

// if the datatype is not same then the results can be un predictable
console.log("2">1)
console.log("02">1)

// sometimes null is converted to 0 and someties NaN

console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)

// strict comparison (datatype and value)

console.log("2"===2) // no conversion is done