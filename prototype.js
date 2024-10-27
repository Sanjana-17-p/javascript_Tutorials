// problem of statement-
// let myName = "sanjana"
// console.log(myName.length);
  
// let MYname = "sarika    "
// console.log(MYname.trim().length);
// In each case we does't want to write trim().length
// console.log(MYname.trueLength);

// Here i want a method that show trueLength 



let myHeros =["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getspiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);

    }
}
// for object  = inject a function 
Object.prototype.sam =function(){
    console.log(`sam is present in all object`);
    
}
// heroPower.sam()       // adding a method to a object

// inject a function for array
Array.prototype.heysam = function(){
    console.log('this is the demo for array');
    
}


// for array
// myHeros.sam()
// myHeros.heysam()
// heroPower.heysam() ====> not have a power

// Inheritance
const user ={
    name:"sam",
    emailId:"sam@example.com"

}
const Teacher ={
    makevideo:true
}
const teachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    // to link two object
    __proto__:teachingSupport  // access the content of teachingSupport(this is out dated approach)

}
// Teacher.__proto__=user //his is out dated approach)


// -----modern syntax-----
Object.setPrototypeOf(teachingSupport,Teacher)


// solution of above problem

let anotherName = "teaAndcoffee"

String.prototype.trueLength =function(){
    console.log(`${this}`);
    console.log(`true length is :${this.trim().length}`);
    
}
anotherName.trueLength()
"harrypotter".trueLength()
"ronweasely".trueLength()