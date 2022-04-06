// array methods

let fruits =["Apple", "Mango" ,"Tropical"]

// push -add at the end 
console.log(fruits);
fruits.push("Avocado")

//unshift -add at the beggining
console.log(fruits)
fruits.unshift("pears")

console.log("fruits")

// pop- removes the last element
fruits.pop();
console.log(fruits)
//shift- removes the last element
fruits.shift()
console.log(fruits)

// splice-remove /insert elements at a specific position 
//delete example
fruits.splice( 1 ,2)
console.log(fruits)

//insertion
fruits.splice(1, 0, "maize")

//includes - checks if an aaray has the given items and returns true if yes and no if not
fruits =["Apple", "Mango" ,"Tropical"]
let hasApple = fruits.includes("Apple")
console.log(hasApple)


function arrayincludes(arr, item) {
    for (let i=0; i < arr.length; i++){
        if (arr[i] ===item){
            return true;
        }
    }
    return false;
}
let hasMango = arrayincludes(fruits , "Mango")

// find and find index
let users = [
    {name:"jay", email:"ajay@gmail.com"},
    {name:"jayson", email:"j@gmail.com"},
    {name:"pete", email:"pete@gmail.com"}
];
let jayson = users.find(function (user) {
    return user.name === "jayson"
});
let jayson2 = users.find((user) => user.name ==="jayson")
console.log( jayson, jayson2)
function finduser(arr, name) {
    
    for(let i=0; i < arr.length; i++){
       if (arr[i].name===name){
          return arr[i]
       }
    }
       return undefined
}
console.log(jayson);



//filter(
let nameStartsWithJ=users.filter(function (user){
    return user.name.startsWith("j");
});
let nameStartsWithJ2 = users.filter(user=>user.name.startsWith("j"));


console.log(nameStartsWithJ)
//TODO : try your own version of filter without the inbuilt

//Transforming an array (Map)
let emails = users.map((user) => user.email)
console.log(emails)
//sort

//reduce

let salaries = [
    {name: "john", amount:700},
    {name: "pete", amount:450},
    {name: "Ann", amount:800},
    {name: "Joy", amount:500}
]
//TODO : Try your own version of a map without using the inbuilt map method





