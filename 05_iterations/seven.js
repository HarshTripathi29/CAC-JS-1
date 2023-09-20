const myNumber = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumber.map((nums)=>{
    return nums+10                          // scope is used so have to return a value.
})
console.log(newNums);

// Chaining   (using two/three methods simultaneously)

const newNums2 = myNumber
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>40)

console.log(newNums2);