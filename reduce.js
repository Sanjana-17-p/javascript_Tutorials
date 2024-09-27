const my_num = [1,2,3]

const myTotal = my_num.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);

    
    return acc + currval
},0)
console.log(myTotal); 




// reduce using arrow function
// const myTotal = my_num.reduce((acc,currval)=>acc+currval,0)
//         //   OR
//     ((acc,currval)=>{
//     console.log(`acc:${acc} and currval:${currval}`);
//      return acc + currval },0)

// console.log(myTotal); 



// ------------------- use for shopping cart-------------
 const myShopping =[
{
    cource :"javascript",
    
    price:2999
 },
 {
    cource :"python",
    
    price:1999
 },
{
    cource :"java",
    
    price:2999
 },
{ cource :"C++",
    
    price:1900
 }
]
const price_to_pay = myShopping.reduce((acc,item)=>acc + item.price,0)
console.log(price_to_pay);

