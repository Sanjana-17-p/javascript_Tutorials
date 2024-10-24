// first way---->using async and await

// async function getallusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')  // here pass the "url"
//         const data=  await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E:",error);
        
//     }
// }
// getallusers()

// second way ---->using then() and catch()
fetch('https://jsonplaceholder.typicode.com/users')  //<----- pass the url
.then((response)=>{
    return response.json()

}).then((data)=>{         // this then handle the response and it is important
    console.log(data);
    
}).catch((error)=>console.log(error)
)



// // notes--
// Checking response status
// The promise returned by fetch() will reject on some errors, such as a network error or a bad scheme. However, if the server responds with an error like 404, then fetch() fulfills with a Response, so we have to check the status before we can read the response body.