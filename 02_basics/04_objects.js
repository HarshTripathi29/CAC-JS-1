// Singleton object or declaring object using constructors

const tinderUser = new Object();
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Harsh"
tinderUser.isLoggedIn = "false"

// nested objects

const regularUser = {
    email : "harsh@gmail.com",
    fullName : {
    userFullName : {
            firstName : "harsh",
            lastName : "Tripathi"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

// Combining objects or merging two objects.

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

 //   const obj3 = {obj1, obj2}                         wrong practice

 const obj3 = Object.assign({} ,obj1 ,obj2)   //{} is the target object in which values of both the objects(source) is pasted.
console.log(obj3);


// Generally spread operator is used to combine the objects

const obj4 = {...obj1, ...obj2}      // first spread the values of both the objects then combine them.
console.log(obj4);

// When values coming from the database
// Array of objects

const users =[
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "j@gmail.com"
    },
    {
        id : 3,
        email : "k@gmail.com"
    }
]

// Access the elements of the array in the object

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));           // gives all the keys kin the object.
console.log(Object.values(tinderUser));         // gives all the values in the object
console.log(Object.entries(tinderUser));        // gives key value pairs in the form of array.

// How to check the object has a property or not

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



