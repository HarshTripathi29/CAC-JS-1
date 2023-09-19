if(true){
    let a = 10
    const b = 20
    var c = 30
}

console.log(c);     // This is a problem since c has a local scope and is accessible globally

// Global scope is different in the windows and the node environment

function one(){
    const username = "Hitesh"

    function two()
    {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

// chote bache bado se ice cream mang sakte hain but bade log nahi mang sakte chote se 

// +++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++++++++

// Basic funtion

console.log(addOne(5));
//console.log(addTwo(60));            // gives error because variable is not initialized(Hoisting) 

function addOne(num)
{
    return num + 1
}

// Function expression
const addTwo = function(num){
    return num+2
}

console.log(addTwo(6)); 

