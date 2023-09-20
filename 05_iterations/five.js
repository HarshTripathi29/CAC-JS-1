const coding = ["js", "ruby", "python", "cpp", "java"]

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

function printMe(item)
{
    console.log(item);
}

coding.forEach(printMe)

 // For each loop on array of objects

 const myCoding = [
    {
        languageName : "Javascript",
        languageFilename : "js",
    },
    {
        languageName : "Java",
        languageFilename : "java",
    },
    {
        languageName : "python",
        languageFilename : "py",
    }
 ]

 myCoding.forEach( (item)=> {
    console.log(item.languageName);     // item is used to access the object.
 })