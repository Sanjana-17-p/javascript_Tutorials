// 1 method----- rsolve()===>then()
const promiseOne = new Promise(function (resolve, reject) {
    // do an asyn task
    // DB calls,cryptography,network
    setTimeout(function () {
        console.log("first way to declare")
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log("promise consumed");

})
// 2) second method

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Asyn task");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Asyn resolved");

})
// 3
const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"sam",email:"sam@example.com"})

    },1000)
})
promisethree.then(function(user){
    console.log(user);
    
})

// 4 then,catch,finally
const promisefour = new Promise(function( resolve , reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"divya",password:"456"})
        } else{
            reject("Error: Something went wrong")
        }
    },1000)

})
promisefour.then((user)=>{
    console.log(user)
    return user.username // at this point it gives an error 
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("the promise is either resolved or rejected"))


// async -await not directly handle the error they use try catch block

const promisefive= new Promise(function(resolve ,reject){
    setTimeout(()=>{
        let error= true // if the value is true then we use tryy and catch block to resolve the error
        // let error = false  // we not use try and catch block it will directly run
        if (!error){
            resolve({username: "javascript",password:"345"})
        }else{
            reject("error:js went wrong")
        }
        

    },1000)
})
// async function consumePromisefive(){
//     const response = await promisefive
//     console.log(response);
    
// }
// consumePromisefive() // if we take let error = false then it smoothly run and 
// let error = true it will give an error and the code is---
async function consumePromisefive(){
    try {
        const response=await promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);
         
    }
}
consumePromisefive()