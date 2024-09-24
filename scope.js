// var c= 25


// let a =90
// if (true) {
//     let a= 100    // block level scope
//     const b = 20
//     var c = 30  
//       //   c=30
// }
// console.log(a)    // global scope
// // console.log(b);
// console.log(c);

// -------- Nested scope-------


// function one(){
//     const username = "sanju"
//     function two(){
//         const website= "youtube"
//         console.log(username);
        
//     }
//     // console.log(website);
//     // two()
// }
// // one()

// if(true){
//     const username= "priya"
//     if (username === "priya") {
//       website = "youtube"  
//       console.log(username+ website);
//     }
//     // console.log(website);
    
// }
// // console.log(username);


//------------------intresting-------------


addone(9)
function addone(num){
    return num +1
    
}


addTwo(7)    //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo= function (num) 
{
    return num+2
    
}