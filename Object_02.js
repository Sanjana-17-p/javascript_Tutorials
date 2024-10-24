// Object Singleton
 const instaUser = new Object()  //singleton object

//  const instaUser = {}  // Non singketon object

instaUser.id = "274abd"
instaUser.name= "Tom"
instaUser.isLoggedIn = false
console.log((instaUser));

const regular1 ={
    email: "st@google.com",
    fullname :{
        userName:{
            firstname : "nihal",
            lastname : "singh"
        }
    }



    
}
// console.log(regular1[email]);
// console.log(regular1.fullname.userName.firstname);


//  How to combine objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2}
// console.log(obj3);{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//  const obj3 = Object.assign({},obj1,obj2,obj4) //{} optional parameter
//  console.log(obj3);

const obj3 = {...obj1,...obj2}   // spread object
console.log(obj3)

// when values comes from database
 const users = [
    { id: 1,
    email: "xyz@gmail.com"},
    {
        id: 2,
    email: "xrz@gmail.com"},
    

   
 ]
 users[1].email
 console.log(instaUser);
 console.log(Object.keys(instaUser));//important points
 console.log(Object.values(instaUser));
 console.log(Object.entries(instaUser));
 //when value does not exist then you have to check
 console.log(instaUser.hasOwnProperty('isLoggedIn')); //===> True
 
  


 
