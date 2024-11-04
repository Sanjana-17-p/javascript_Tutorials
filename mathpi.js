 
//  getOwnPropertyDescriptor----> it tells the hidden property of object
 const descripter= Object.getOwnPropertyDescriptor(Math,"PI")
//  console.log(Math.PI);
//  console.log(descripter);   // you can not the change the value
 
//  here we give a own hardcoded value--

  const coffee ={
    name :"ice coffee",
    price: 215,
    isAvailable:true,
     orderCoffee: function(){
        console.log("coffee nhi bni");
        }

  }
//   console.log(coffee);
// console.log(Object.getOwnPropertyDescriptor(coffee,"name"));
// now hwre you change the own property

// Object.defineProperty(coffee,'name',{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(coffee,"name"));
  

// loop apply=
// for(let[key,value] of coffee){
//      console.log(`${key}and ${value}`);
//     //  result--->coffee is not iterable--->bacoz it is object
// }
for(let[key,value] of Object.entries(coffee)){

    if(typeof value!=='function')
         console.log(`${key} : ${value}`);
        
    }