// 
// Comparison Operators : >, < , >= , <= , == , != , === , !==

// Nested if else

// Practical use

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard && 2==2)
{
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("User logged in");
}