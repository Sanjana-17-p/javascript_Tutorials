// Function rest operator

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400,700));


function calculateCartPrice( val1,val2 , ...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,700));


const user ={
    username:"sam",
    price:"200"
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    

}
// handleObject(user)
handleObject(
    {
        username:"sam",
        price:"200"
    }
)
// pass Array
const myarray = [200,400]
function secondvalue (getArray){
    return myarray[1]
}
console.log(secondvalue(myarray));
