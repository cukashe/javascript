// a deeper dive into functions


function showmessage() {
    alert("Hello Everyone")
}


//call the function (execute / invoke)
showmessage();

//scope - local and global variables

let age = 78; // global variable
function displayAge() {
    let age = 67;// local variable
    alert(age);//67
}
alert(age);//78
displayAge();

// parameters and arguments
// you can have default value
function sayHi(name) {
    alert("${name} says Hello")
}
sayHi("");
sayHi("jack");

//write a function greetings that takes in two inputs [ from , text] then displays an alert showing "text from"
// greetings ("ann" ,"hello")
//=> hello ann
function Greetings(from , text) {
    alert ("${text} ${from}");
}
Greetings ("ann" , "hello")

// return statement
function add (a, b){
    // result of running this function
    return a + b
}
let sum = add(4,5);
console.log(sum);

//example 2
function checkAge(age) {
    if (age > 18){
    return true
    }else{
        return false;
    }
}
// infinity is a number
// -Infinity
checkAge(Infinity)

//function expression
let  sayHello = function (name) {
    alert (name);
    
}
sayHello();

//arrow functions 
function add (a, b){
    return a + b
}
const addtwo = (a,b) => a+b;

const checkAge(age){
    if (age > 18){
    return true
    }else{
        return false;
    }
}
const checkAge3 =(age) => (age > 18 ? true : false);

function Greetings1(from , text) {
    alert ("${text} ${from}");
}
Greetings ("ann" , "hello")

const Greetings2 = (from , text) =>  alert ("${text} ${from}"); 

