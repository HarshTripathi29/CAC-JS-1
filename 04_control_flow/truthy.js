const userEmail = []
if(userEmail){
    console.log("Got user email");
}
else
{
    console.log("Dont have user email");
}

// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
//  'false', "0", " ", [], {}, function(){}  


// Check if the array is empty
if(userEmail.length===0)
{
    console.log("Array is empty");
}

// Chech if the object is empty
const emptObj = {}
if(Object.keys(emptObj).length===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1 
// val1 = 5?? 10
// val1 = null??20
// val1 = undefined??30
val1 = null??10??20

console.log(val1);


// Ternary operator is different

// condition ?? true : false

const iceTeaPrice = 100
iceTeaPrice<=80? console.log("less than 80"):console.log("more than 80")