// for in loop apply on object

const myobj= {
    js:"javascript",
    cpp:"c++",
    py:"python"
}
for (const key in myobj) {
    // console.log(`${key} shortcut is for ${myobj[key]}`);
    
}
// forin apply on array

const programming= ['js','rb','py','cpp','java']
for (const key in programming) {
//    console.log(programming[key]);
//    console.log(key);
   
}


// forin apply on map
const map= new Map()
map.set('IN','INDIA')
map.set('US','UNITED STATE')
map.set('AU','AUSTRALIA')
map.set('IN','INDIA')
map.set('FR','FRANCE')
for (const key in map) {
    console.log(key);
    
}