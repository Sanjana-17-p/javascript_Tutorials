// object destructuring

const course ={
    courseName:"java script",
    price: "999",
    courseInstructor:"Hitesh"

}
// course.courseInstructor

// const{courseInstructor} = course // destructuring  OR
const{courseInstructor: instuctor}= course

console.log(courseInstructor); // Hitesh
console.log(instuctor);  //same result -->Hitesh


