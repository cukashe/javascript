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

//switch statement

switch (role) {
    case "admin":
        console.log(101)
        break;
        case "student":
            console.log(301)
            break;
            case "Trainer":
                console.log(406)
                break;
                case "faculty":
                    console.log(109)
                    break;
                    default:
                        console.log(0)
}

// logical operators
// and operator [&&] - evaluates to true if all statements evaluates to true. if any of the statements is false the whole 

let age =15;

if (age > 18 && age<=35) {
    console.log("PASS");
}
let username = "abdi";
let password = "1234";
let usernameinput = prompt("Enter Username")
let passwordinput = prompt("Enter Password")

if(usernameinput === username && passwordinput === password){
    alert("Authenticated");}
    else {
        alert("Something went wrong Please try again")
    }

//or operator(||)
//evaluates to true if any of the statement is true,if all statements are false it will evaluate to false.

let hasParentalPermission = true;
if (age > 18 || hasParentalPermission) {
    alert("You are allowed");}
    else{
        ("Seek parental permission")
    }

// not (!) - negates (flips) the current value.
let hasGoodCredit = true;
let hasCriminalRecord = true;
let hashighincome = true;

if (hasGoodCredit && !hasCriminalRecord){
    console.log("Elligable for a loan")}
    else{
        console.log("NOT eligable for a loan")
    }
if (hashighincome && hasGoodCredit){
    console.log("Eligable for a loan")
}
   else{
       console.log("NOT Eligable for a loan")
   }

   if (hasGoodCredit || hashighincome){
       console.log("Eligable for a loan")
   }
   else{
       console.log("NOT Eligable for loan")
   }
//Tenary operator (?)
if (age > 18 ){
    console.log("Allowed")
}
else{
    console.log("Not Allowed")
}
age > 18 ? console.log("Allowed") : console.log ("Not Allowed");
// rewrite th switch statement to use tenary operators

role == "admin" ? consolele.log("101") :console.log("301") ?console.log("406") :console.log("109")