const myArray1 = [1,4,5,2,4,8,9]
const myArray2 = ["Ironman","Thor"]

//another way to declare array
const myArray3 = new Array(1,3,2,5)

// console.log(myArray1[2])
// console.log(myArray2[3]) //undefined
// console.log(myArray3[3])


// Array methods
// myArray1.push(10)
// console.log(myArray1); 
// myArray1.pop()  // no argument


// myArray1.unshift(9)
// console.log(myArray1);
// myArray1.shift()
// console.log(myArray1)

// console.log(myArray1.includes(6));
// console.log(myArray1.indexOf(5));


// const newArr = myArray1.join()
// console.log(newArr); // string
// console.log(myArray1);


//+++++++++ Slice,Splice +++++++++
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// console.log(animals.slice(3,5));
// console.log(animals.slice(-2));

console.log(animals.splice(2,5))  
console.log(animals)  //splice manipulate the original array


