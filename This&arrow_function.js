const user= {
    username :"harry",
    price:999,
    welcomeMessage: function(){
        console.log(`hello ${this.username}  Welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "ron"
// user.welcomeMessage()

// console.log(this); -----> refer empty object {}



// function one(){
//     let username = "Hermoine"
//     console.log(this.username); // "this" not used in function 
    
// }
// one()
const one = function(){
    let username = "ginny"
    console.log(this.username);
    
}
// one()   // both the cases "this" not work

//=========== ARROW FUNCTION =======

const TWO = ()=>{
    let username = "ginny"
    console.log(this.username);
    
}
TWO()

// basic declaraton 
// const addTwoNo = (num1,num2)=> {
//     return num1+num2
// }
// console.log(addTwoNo(10,9));    =====>19


// implicit declaration
// const addTwoNo = (num1,num2)=>  num1+num2
const addTwoNo = (num1,num2)=>  (num1+num2)

// console.log(addTwoNo(10,9));   //=====>19



const demo = ({username:"gia"})
console.log(demo);
