// const coding = ["js", "java", "ruby", "python", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item                             // value is not returned 
// }
// )

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=> num>4)        // All the values satisfying the condition would be returned
console.log(newNums);

// in callback function if we open the scope then we have to write return keyword otherwise directly in one line.

// Do the same using forEach

const newNums2 = []
myNums.forEach((num)=>{
    if(num>4)
    {
        newNums2.push(num)
    }
})
console.log(newNums2);