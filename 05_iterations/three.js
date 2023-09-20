const arr = [1,2,3,4,5]

//for(iterator of object)

for(const num of arr)
{
    console.log(num);
}

const greetings = "Hello World"

for(const greet of greetings)
{
    console.log(`Each char is ${greet}`);
}

//Maps (object, key value pairs)

const map = new Map()
map.set('IN', "India")
map.set('USA',"United States Of America")
map.set('Fr', "France")
map.set('IN', "India");                     // Values in map are unique and the order is also same.

// console.log(map);

// for of loop on map

for(const [key,value] of map)
{
    console.log(key , ':-' , value);
}


// for of loop on an object (Object is not iteratable by using for of loop)

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

for(const [key,value] of myObject)
{
    console.log(key , ':-' , value);
}

