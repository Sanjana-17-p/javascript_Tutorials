// ES6 

// class user{
//     constructor(username,email,password){
//         this.username =username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`

//     }
//     // add some extra method
//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }
// const data1 = new user("harrypotter","lily@example.com","345")
// console.log(data1.encryptPassword());
// console.log(data1.changeUsername());


// above work done with function

function userDetails(username,email,password){
    this.username = username
    this.email =email
    this.password = password
    
}
userDetails.prototype.encryptPassword= function(){
    return `${this.password}abc`
}
       
userDetails.prototype.changeUsername = function(){
     return`${this.username.toUpperCase()}`
    }
    
const data2 = new userDetails("hermoine","granger@ex.com",890)
console.log(data2.encryptPassword());
console.log(data2.changeUsername());



