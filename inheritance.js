 class User{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
        
    }
 }

 class Teacher extends User{
    constructor(username,email ,password){

        super(username)
        this.email=email
        this.password=password

    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }


 }
 const details2 = new Teacher("snape","lily@exm.com","3425")
 details2.addCourse()
 const data =new User("lupin")
// data.addCourse()   // user not access the addcourse


// data.logme()  // have access
details2.logme()

console.log(details2 instanceof Teacher);   // true
console.log(details2 instanceof User);   // true
console.log(Teacher instanceof User);   // false
