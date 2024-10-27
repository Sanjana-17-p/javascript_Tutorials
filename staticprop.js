//  the task is - get id to user(create id)

// static is used to  prevent for access
class User{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
        
    }
     static createId(){   // not acccess
        return `123`
    }
 
 }
 const sam =new User("samita")
 console.log(sam.createId());
 
