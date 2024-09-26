const programming = ['js','rb','py','cpp','java']
// programming.forEach(function(val){
//     console.log(val);
//     })

programming.forEach( (item)=>{
    // console.log(item);
    
})

programming.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
    
})





// if you want to pass a function then

function printme(a) {
    // console.log(a);
    
}
programming.forEach(printme)