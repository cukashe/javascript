let user1={
    username:'lamech',
    pwd:'simbaland1'
}
let user2={
    username:'mongare',
    pwd:'simbaland2'
}

//class is a blue print from which are derived
//defining a class
/*
class User{
    //it need a  special method called a constructor this will be invoked when you create a new object (instance)
    constructor(username,password){
        this.username=username
        this.password=password
    }
}
let jackie = new User('jackie','kalo1234')
let manti = new User('manti','manti1234')
console.log(jackie,manti)

// define  aclass called animal that has two properties name and canJump

class Animal{
    constructor( name,canJump){
    this.name=name
    this.canJump=canJump
    }
}
let dog = new Animal('jackie',true)
let cow = new Animal('bosko',false)
console.log(dog,cow)
*/
// wit relevant examples illustrate how the concept of method and inheritance are applied using classes in object oriented programming with javascript
// methods

// class user{
//     constructor(email, name){
//         this.email=email
//         this.name=name
//     }
//     logIn(){
//         console.log(this.email,' Just logged in')
//      }
//      logOut(){
//         console.log(this.email,' Just logged out')
//      }
// }
// let userOne =new user ('katindi@gmail.com','katindi')
// let userTwo = new user ('mosh@gmail.com','mosh')

// console.log(userOne,userTwo)
// userOne.logIn()
// userTwo.logOut()

//inheritance
class User{
    constructor(email, name){
        this.email=email
        this.name=name
    }
    logIn(){
        console.log(this.name,' Just logged in')
     }
     logOut(){
        console.log(this.name,' Just logged out')
     }
     
}
class Admin extends User{
    deleteUser(user){
    users=users.filter(a=>{
        return a.email!=user.email
    })
    }
}
let userOne = new User ('katindi@gmail.com','katindi')
let userTwo = new User ('mosh@gmail.com','mosh') 

userOne.logIn();
userTwo.logOut();

let admin = new Admin('stanley@gmail.com','stano')
let users = [userOne, userTwo]

admin.deleteUser(userOne)
console.log(users)




