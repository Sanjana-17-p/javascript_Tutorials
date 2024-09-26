// for of loops---->array specific loops

// apply on array
const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

// apply on sring
const str = "hello world"
for (const i of str) {
    console.log(i);
    
}

// map----> provide unique and order value in the form of key value pair
const map= new Map()
map.set('IN','INDIA')
map.set('US','UNITED STATE')
map.set('AU','AUSTRALIA')
map.set('IN','INDIA')
map.set('FR','FRANCE')

console.log(map);

// how to apply loop
for (const [key,value] of map) {
    // console.log(key, '-', value );
      
}

// apply to object = it gives

const myObj = {
    'game1': "gta",
    'game2':"free fire"
}
for (const [key,value] of myObj) {
    console.log(key, "-",value);
    
    
}
