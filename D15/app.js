// FETCH
/**let url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
         .then((response)=> response.json())
         .then((data)=> {
             document.body.innerHTML = data
             .map((user) => `<p>${user.name}</p>`)
             .join("");
             
         });
         */



//Exercise

let url = "https://jsonplaceholder.typicode.com/posts"
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        document.body.innerHTML = data.map((posts) => `<h2>${posts.title}</h2>
             <p>${posts.body}</p>`)
            .join("");

    });

   // https://ist-developers-platform.vercel.app/api/team


   let istApi = "https://ist-developers-platform.vercel.app/api/team"
   fetch(istApi)
   .then((response) => response.json())
   .then((data) => console.log(data));
