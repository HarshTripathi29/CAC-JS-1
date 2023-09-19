// singleton 

// object literal
// key value pairs
// How to declare an Object?

const mySym = Symbol("key1") // How to declare a symbol

const JsUser ={
    name : "Harsh",
    age: 22,
    "Full Name" : "Harsh Tripathi",         // cannot be accessed using the firt way.
    [mySym] : "myKey1",                     // using a symbol as a key
    location : "Renukut",
    email : "harsh@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday","Saturday"]
}

// How to access an object

//1. Generally used
console.log(JsUser.name);
//console.log(JsUser."Full Name");        // not possible to access an element having key as string

//2. Better way
console.log(JsUser["age"]);
console.log(JsUser["Full Name"]);

//3. How to access a symbol(datatype)
console.log(JsUser[mySym])                


// If we freeze the value of an object then the changes will not propagate to the original object.
JsUser.email = "harsh@chatgpt.com"
//Object.freeze(JsUser)               // Now we cannot change the email value.
JsUser.email = "harsh@microsoft.com"

console.log(JsUser);

//Adding a function in the object

JsUser.greeting = function(){
    console.log( "Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log( `Hello JS User, ${this.name}`); //this is used to access the properties of the object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());