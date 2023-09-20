const myObject = {
    JS : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "swift by apple",
}

// for in loop is used for objects

for(const key in myObject)
{
    console.log(`${key} shortcut for is for ${myObject[key]}`);
}

// for in loop for arrays

const programming =["js", "cpp", "rb", "py", "java"]

for(const key in programming)
{
    console.log(key);           // gives the keys of array
    console.log(programming[key]);  // to get the values.
}