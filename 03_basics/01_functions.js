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
