// promise is an object
//1. creating a promise 

//promise takes a callback function

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // Do async calls, cryptography related.

    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000)
})

//2. Consuming a promise

promiseOne.then(function(){
    console.log("promise consumed");
})


const promiseTwo = new Promise(function(resolve, reject){
    
    setTimeout(function(){
        console.log("Async task 2 completed");
        resolve()
    },1000)
   
}).then(function(){
    console.log("promise 2 is consumed");
})

// Jo bhi parameter resolve ke andar pass krte hain vo .then() me mil jata hai

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("data is passed in the resolve");
        resolve({username:"harsh", email:"tripathi@gmail.com"})
},1000)
})
promiseThree.then(function(user)
{
    console.log(user);
}
)

// 

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error)
        {
            resolve({username:"harsh", email:"tripathi@gmail.com"})
        }
        else
        {
            reject("ERROR , something went wrong")
        }
    }, 1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("promise is either resolved or rejected");
})


// Handling(consuming) the promise using Async await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error)
        {
            resolve({username : "Harsh", email : "harsh@gmail.com"})
        }
        else
        {
            reject("Error, something went wrong")
        }
    },1000)
})

async function consumePromiseFive()
{
     try{
        const response = await promiseFive
        console.log(response);
     }
     catch(error){
        console.log(error);
     }
}

// Fetching data form an API

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
        // response ke andar values daal do or print kara do 
    }
    catch(error)
    {
        console.log("E:",error);
    }
}

getAllUsers()

// Doing the same using .then and .catch


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})
