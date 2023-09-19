// Object Destructuring

const course = {
    coursename : "js in hindi",
    price : "99",
    courseInstructor : "Hitesh",
}

// Extracting the value from the object

const {courseInstructor : instructor} = course
console.log(instructor);
 