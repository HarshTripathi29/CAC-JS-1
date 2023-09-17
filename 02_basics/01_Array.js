// array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array Methods

// 1. Push method add an element in the end
myArr.push(6)
myArr.push(7)
console.log(myArr);

// 2. Pop() : Delete an element from the end
myArr.pop()
console.log(myArr);

// 3. unshift() : Add an element in the starting
myArr.unshift(8)
console.log(myArr);

// 4. shift() : Delete an element from the starting.
myArr.shift()
console.log(myArr);

// 5. Includes() : returns true or false
console.log(myArr.includes(9));

// 6. IndexOf() : returns the index of the element if present otherwise -1.
console.log(myArr.indexOf(4));

// 7. slice() vs splice() : 
console.log("important for interviews");

console.log("A", myArr);

const myn1 = myArr.slice(1,3)           // Original array is not modified we are only copying few elements from the array
console.log("B",myArr);
console.log(myn1);                      // last index element in not included

const myn2 = myArr.splice(1,3)          // Original array is modified we are cutting few elements from the array
console.log("C",myArr);                     // last index element is included
console.log(myn2);
