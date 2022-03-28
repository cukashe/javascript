// comparison operaters

let a = 7;
let b = 6;

//greater than
console.log(a > b)

//greater than or equalto
console.log(a >= b)

//less than than than
console.log(a < b)

//less than or equalto
console.log(a <= b)


//equalto
console.log("--equal to---")
console.log(a == b)


//identical 
console.log("--identical---")
console.log(a === b)




//conditional statement - u can able to execute a certain block ot code based on a condition (if)

let isRaining = true;

if (isRaining) {
    alert ("Raining heavily")
} 



let userName = "mohamed"
let password = 123

let userInput = prompt("enter username")

if  (userInput == userName) {
    alert("username is corect")
    let passwordInput = prompt("enter password")

    if (passwordInput = password){
        alert(welcome)
     }else {
            alert("wrong password try agin")
        }
} else {
    console.log("Wrong username please try again")
}




let userAge = prompt("what is yor age? ");

if (userAge >= 18){
    alert ("You are an Adult")
} else { 
   alert("You an Under Age")
}

let age = prompt("what is yor age? ");
if (age < 18){
    console.log ("Child")
} else if(age <= 35 ) {
    console.log("youth")
} else {
    console.log("adult")
}


let role = prompt ("user role")

if (role == "admin"){
    console.log(101)
}else if (role == "student"){
    console.log(301)
}else if (role == "trainer"){
    console.log(406)
}else if (role == "facility"){
    console.log(109)
}else {
    console.log(000)
}