// objects
// key valued pairs(oop)
// how to declear an object
let user = {
    name : 'lamech mongare',
    email: 'lamechcruze@gmail.com',
    age:30,
    likes:['cooding',['eating'] ,['reading novels'] ,'learning']
}
console.log(user)
console.log(user.likes[3])
// declearing an object name student with properties studentid an couure set to 782 and fullstack respectivley
let student={
    studentId : 782,
    course : 'fullStack',

}
// the use of square bracket notation 

console.log(student)
// changing a value
student.studentId =3445
// deleting a property
delete student.studentId
//how to access propertie of an object

console.log(student.studentId)
 
let john ={
    fullName:'john the greatest',
    userName:'john1234',
    phoneNo:'123456789',
    login:function(){
        console.log('has logged in')

    },
    login2:() =>{
        console.log('has logged in')

    },
    singUp(){
        console.log('Has Logged In')
    }
}
john.singUp()
// creat an object called animal that has a method named jump which logs on the console i can jump
let animal ={
    method :'jumped',
    phoneNo:'123456789',

    logIn(){
        console.log( this.method + 'I can jump')


    },
    sendMessage(){
        console.log('message sent to')
    }
}
animal.logIn()
// This key word is irustrated above


let users = {
    name:'john',
    surname :'smith'
}
console.log(users)
users.name ='peter'
delete users.name
// example 2

let salaries ={
    john:100,
    ann:160,
    pete:130,
}
// the use for in loop
let total =0
for(const name in salaries){
total+=salaries[name]// finding  the total
console.log(name)
console.log(salaries[name])//to  show the figures
}
console.log(total)

