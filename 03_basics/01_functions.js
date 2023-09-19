function addTwoNumbers(number1, number2)
{
    console.log(number1 + number2);     // console only prints the value.
}

addTwoNumbers(3,4)
addTwoNumbers(3,"a")
addTwoNumbers(3,null)

// Important
// value is not returned by the function only printed on the console.

const result = addTwoNumbers(3,5)
console.log("Result:" ,result);

function addTwoNumbers2(number1, number2)
{
    let result2 = number1+number2
    return result2
}

const result2 = addTwoNumbers2(3,5)
console.log("Result :", result2);

// Different ways of taking values

// function loginUserMessage(username)
// {
//     return `${username} just logged in`
// }

console.log(loginUserMessage("Harsh"));

// What if do not pass any value to the function 
console.log(loginUserMessage());                    // gives undefined

// How to solve this problem
//1. use if case

function loginUserMessage(username)
{
    if(username === undefined)          // (!username)
    {
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}

//2. or we can enter a default value
function loginUserMessage(username="Unknown")
{
    return `${username} just logged in`
}


//___________________________________________________________________________________//

//Passing parameters in a funciton 

// User adds products in the shopping cart
// We dont know th number of items user is gonna add so how to pass the parameter

// Rest operator packs all the values in a bundle and returns

function calculateCartPrice(val1, val2, ...num1)
{
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500))

// How to pass an object to a function and use it 

const user = {
    username : "Harsh",
    price : 99,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

// or we can directly pass an object as argument to the function while calling the function

handleObject({
    username : "Hitesh",
    price : 199
})


// How to pass array to function 

const myNewArray = [200, 300, 400]

function returnSecondVlue(getArray)
{
    return getArray[1]
}

console.log(returnSecondVlue(myNewArray));