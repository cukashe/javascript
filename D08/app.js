// a deeper dive into functions


function showmessage() {
    alert("Hello Everyone")
}


//call the function (execute / invoke)
showmessage();

//scope - local and global variables

let age = 78;
function displayAge() {
    let age = 67;
    alert(age);
}
displayAge();