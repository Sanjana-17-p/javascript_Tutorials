// function
// function addTwoNumber(num1,num2){   

//     console.log(num1+num2);
   
// }
//  const result =addTwoNumber(2,5)  //arguments
//  console.log("Result", result);   // Result undefined
 
//  const result =addTwoNumber(2,"5") //---->25
//  const result =addTwoNumber(2,null)  //----> 2
// const result =addTwoNumber(2,"a")//----->2a
//   console.log(result); // this code does't print anything because we not return anything.
 
function addTwoNumber(num1,num2){   

    // let result = num1+num2
    // return result   // after return not any value print
     //  OR
    
       return num1+num2

}
const result = addTwoNumber(2,5)
// console.log(result);


function logInUser (username = "Priya") {

    if(username===undefined){   // (!username)===>(username ===undefined)
        console.log("Please Enter  a User name");
        return
    }
    return `${username} just logged in `
    
}
// logInUser("Sanjana")   // function not return anything
console.log( logInUser("Sanjana") );

//  ------- if we not pass any value then the result------

// console.log(logInUser())   //------>undefined just logged in 


