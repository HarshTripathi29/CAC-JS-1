const name = "Harsh"
const repoCount = 50

// console.log(name + repoCount + "50") (Not a good practice)

//String Interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = String('Harsh-hc')
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherName = gameName.slice(-8,4)
console.log(anotherName) 

const newStringOne = "   hash   "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://harsh.com/harsh%20tripathi"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))
console.log(gameName.split('-'))