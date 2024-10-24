//object Literals

// Here we use symbol.// first you have to define a symbol then use.
const mysym = Symbol("key1") 
const JsUser={
    name : "Vidha",
    age :21,
    Location : "Lucknow",
    emailid : "vidha20@google.com",
    LastLoginDetails: ["Monday","Saturday"],
    [mysym]: "mykey1"    //important

}

// two way to access object
// console.log(JsUser.emailid)
// console.log(JsUser["emailid"]);
// console.log(JsUser[mysym])
// //console.log(JsUser)

// how to change the value
// JsUser.name = "Arun kapoor"
// console.log(JsUser)

// // How to lock the value
// //Object.freeze(JsUser)
// JsUser.name = " nisha"
// console.log(JsUser) 


// function 
JsUser.greeting = function(){
    console.log("hello js user")
}
JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

