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
    return a + b
}

add (4,5)