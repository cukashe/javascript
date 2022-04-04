//arrays
//this is a list of items
let users =[ 'mango','banana','tumeric','carrot']
console.log(users)
//access an item in the array -use of square bracket 
let sample = users[3]
//get the length
let numberOfUsers = users.length
// add anew item to the array at the end
users[4]='chips'
users.push('lemon')
console.log(users)
 // adding at the top
 users.unshift('lemon')
console.log(users)


let myform = document.getElementById("userForm");
//event 
myform.addEventListener('submit',function(e){
    e.preventDefault()
    let newUser=document.getElementById ('userInput').value
    let list = document.getElementById('userList') 
    users.push(newUser)
    addContent(users)

    /* let newListItem = ` <li style="border-bottom: 2px solid brown; display: flex; font-size: x-large;" class="me">${newUser}</li>`

   list.innerHTML = newListItem
   */
})

function addContent(users){
    let markup= []
 for (a=0 ; a<users.length ; a++)  {
     markup.push(`<li>${users[a]}</li>`)

 } 
 let list = document.getElementById(`userList`);
 list.innerHTML = markup.join(" ") ;

}

addContent(users)


