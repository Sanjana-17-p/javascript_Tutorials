class User{
    constructor(email,password){
        this.email = email
        this.password= password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email( value){
        this._email =value
    }
     get password(){
        // return this.password.toUpperCase()---> error
        // return this._password.toUpperCase()
        return `${this._password}  harry`

     }
     set password(value){ 
        // this.password= value  ---> give error( Maximum call stack size exceeded)
        this._password= value
     }
     
}
const details = new User('harry@ex.com',"ytr")
console.log(details.password);
console.log(details.email);

