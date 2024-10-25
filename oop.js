// Object literals
// const user  ={
//     username:"sanjana",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:()=>{
//         // console.log("got user details from database");
//         // console.log(`Username:${this.username}`);
        
//     }
// }
// console.log(user.getUserDetails());  //--->undefined

// console.log(user.username);
// console.log(this);    //---->{}

function User (username,loginCount,isloggedIn){
    this.username =username;
    this.loginCount = loginCount;
    this.isloggedIn =isloggedIn
    this.greeting =function(){
        console.log(`welcome ${this.username}`);
        
    }




    
    return this     // implicit return
 
}

// ------------- constructor function--------
//  const userOne = User("san",12,true)
// if we make another variable it will be overwrite
// const userTwo = User("akash",9,false)

//  so here we use constructor which make new instance
// constructor call new keyword

const userOne = new User("san",12,true)
const userTwo =new User("akash",9,false)
// console.log(userOne);
console.log(userTwo.constructor);

//method-
// 1) instanceof  = return value is boolean value

function car(make,model,year){
    this.make = make;
    this.model = model;
    this.year =year
}
const auto =new car('Honda','Accord',1998)
console.log(auto instanceof car);
console.log(auto instanceof Object);


