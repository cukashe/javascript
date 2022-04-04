/** 
 * iteration and loops
 * while loop
 
 * do while
 * for loop
 */

// start condition terminating statment
let i =1;

while(i <= 10 ){
    console.log(i)
    i = i+1
}
let c =1
while (c <= 10){
    document.write(` <img src="image/12.webp" alt="" width="400px"
     height="400px"/>`)
    c = c +1
}
//for loop
for (let i = 0; i < 10; i = i +1 ){
console.log(i)
}
for (let c = 0 ; c < 10; c = c + 1 ){
    console.log(c)
    }
    // using a for loop the modular operators and comparison oparators and if statment write a for loop to log on the console even numbers between 0  and 100
for ( let b = 0; b <= 100; b++){
    
    if(b%2 ==0) {
        console.log(b)
    }


}
// write a program that iterates from 0 to 100 
//if ta number is divisible by 3 output fizz
//if a number is divisible by 5 output  buzz
// if a number is divisible by both 5 and 3 output fizzbuzz
//if its divisible by neither output the number
//N/B



for (let a = 0; a < 100; a++) {
    if (a % 5==0 && a % 3== 0) console.log(" FizzBuzz");
    else if (a % 5 == 0) console.log("buzz");
    else if (a % 3 == 0) console.log("Fizz");
    else console.log(a);
}

//write a loop which prompts for a number greater than 100 .if the visitor enters another number -asks them to input again
// the loop must ask for a number untileither the visitor enters a number greater than 100 or cancels the input /enter an empty line.
// here we can assume that the visitor only inputs number .there's no need to implement a special handling for a non-numeric input in this task 

// bonous - write  a js program to find prime numbers

/*
let visitor =prompt('enter mumber')
for (let d = 0; d > 100; d++ ) {
    
    if(d < 100  ){
        console.log('input again')
    }

}
*/


let input = prompt('visitor');
for (let d = 0; d < 100; d++){
if(input <= 100){
  input = prompt("input again");
}
}


// break --break the loop
for (let i = 0; i <= 100 ;i++ ){
    if (i>50) {
        break;
    }
    else {
        console.log(i)
    }
 }
 // continue -- skip current iteration
 
 for (let i = 0; i <= 5 ;i++ ){
     if (i=3){
         continue;
     }
     console.log(i);
 }
 
 //ex2
 for (let i = 0; i <= 100 ;i++ ){
     if (i % 2 == 1){
         continue;
     }
     console.log(i)
 }














