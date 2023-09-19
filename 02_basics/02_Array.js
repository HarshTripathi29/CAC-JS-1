const marvel_heroes = ["thor", "ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

//push returns the same array
// marvel_heroes.push(dc_heroes) 
// console.log(marvel_heroes);

// concat returns a new array
const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

// Best way to concat two arrays.
// Spread operator
const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);


//to spread out all the values of the array
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(3)
console.log(real_another_array);

//When we take data from the web it may be in different forms . So to find its form or to change it to array

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Harsh"));
console.log(Array.from({name : "Hitesh"}));         //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));