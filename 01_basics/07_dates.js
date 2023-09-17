// myDate is an instance of date object

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof(myDate));

let myCreatedDate = new Date(2023, 0 , 23)          // YY-MM-DD format
console.log(myCreatedDate.toString());

let myCreatedDate2 = new Date("01-14-2023")         // MM-DD-YY format
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)                            // returns value in mili seconds 

console.log(myCreatedDate.getTime());

// To get the value in seconds

console.log(Math.floor(myCreatedDate.getTime()/1000));

let newDate = new Date()


console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday : "long",
})