//FUNCTIONS
//Reusable pieces (groups) of code;

//declaring function
function preparechicken(){
    //function body
    console.log("Gather ingridients")
    console.log("Marinate chicken")
    console.log("Cook onions and tomatoes")
    console.log("Add the chicken and wait for 45mins")

}
//execute , invoking , calling
preparechicken();
//setInterval (preparechicken ,1000)
//setTimeout

//add two numbers
//a and b are parameters
function sum(firstNumber ,lastNumber ) {
    console.log(firstNumber + lastNumber)
}
// 20 and 41 are arguments
sum ( 20, 41);
sum ( 20, 55);
sum ( 20, 474);
sum ( 20, 41);

function sayHi(){
    alert ("Welcome, Click Ok to enter your name")
    let name = prompt("whats your name");
    alert ("Hello there" + name)
}
sayHi();