// stack(primitive)    //heap(non-primitive)

let myYoutubename  = "vidhadotcom"
let anothername = myYoutubename

//console.log(anothername) // vidhadotcom


//Here we change the value of anothername.
anothername = "xyzdotcom"
console.log(myYoutubename)// vidhadotcom
console.log(anothername) // xyzdotcom


// for heap=> it only give the refernce(changes done on original values)

let user_one = {
    email: "vs@google.com",
    id: "01C"

}
let user_two = user_one
user_two.email = "vidhadotcom"
console.log(user_one); //   { email: 'vidhadotcom', id: '01C' }    

console.log(user_two);    //   { email: 'vidhadotcom', id: '01C' } 