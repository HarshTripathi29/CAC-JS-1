const user = {
    username : "Harsh",
    price : 99,
    welcomeMessage : function(){
        console.log(`${this.username} ,Welcome to website`);
        console.log(this);
    }
    
}
// this keyword is used to access the keys/values of the current context.

user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()

console.log(this);      // current context is empty in the node environment(or retunrs the global object that is window object in the browser)

// function chai()
// {
//     let username = "harsh"
//     console.log(this.username);     // this cannot be used in the functions
// }

// chai()

//Declaring function using Arrow Function


const chai=()=> 
{
    let username = "harsh"
    console.log(this);     // this cannot be used in the functions
}

chai()


// Arrow function

const addTwo = (num1, num2) => {
    return num1+num2;
}

console.log(addTwo(3,4));

// Implicit return
// no need to write return when using parenthesis
const addTwo2 = (num1, num2) => (num1+num2)
console.log(addTwo2(3,4));
// To return object
const addTwo3 = (num1,num2) => ({username:"Hitesh"})

console.log(addTwo3(3,4));
