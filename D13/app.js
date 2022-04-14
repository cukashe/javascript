
   
let developers = [
	{
		name: " Baraka Mulumia",
		role: "Front End Lead",
		img: "https://avatars.githubusercontent.com/u/65751779?v=4",
		dept: "front_end",
	},
	{
		name: "Mohammed Ahmedah",
		role: "Front End Intern",
		img: "https://avatars.githubusercontent.com/u/92859355?v=4",
		dept: "front_end",
	},
	{
		name: "Jack Payne",
		role: "Api Designer",
		img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		dept: "backend",
	},
	{
		name: "Alicia Keys",
		role: "UI/UX Lead",
		img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		dept: "design",
	},
	{
		name: "Priyanka chopra",
		role: "UI/UX intern",
		img: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		dept: "design",
	},
	{
		name: "Jason stantham",
		role: "Testing Lead",
		img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		dept: "testing",
	},
	{
		name: "Raymond Reddington",
		role: "Testing Intern",
		img: "https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		dept: "testing",
	},
];

function creatDeveloperCard(developer){
    return `
    <figure class="bg-gray-800 rounded-md p-8 dark:bg-slate-800 w-96">
    <img
        class="w-48 h-48 rounded-full mx-auto"
        src="${developer.img}"
        alt=""
        width="384"
        height="512"
    />
    <div class="pt-6 te space-y-4">
        <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400 text-center">
                ${developer.name}
            </div>
            <div
                class="text-slate-100 dark:text-slate-500 text-center"
            >
               ${developer.role},${developer.dept}
            </div>
        </figcaption>
    </div>
</figure>
    
    `
 
}  //  document.getElementById('root').innerHTML=creatDeveloperCard(developers[0])

function paintDeveloper(developers){
    let cards=developers.map((dev)=>creatDeveloperCard(dev)).join(' ');
    document.getElementById('root').innerHTML=cards;
}
paintDeveloper(developers)

//fronEnd
document.getElementById('front_end').addEventListener('click',()=>
 {
let frontEnd = developers.filter((dev)=>dev.dept==='front_end')

paintDeveloper(frontEnd)
});
//design
document.getElementById('design').addEventListener('click',()=>
 {
let design = developers.filter((dev)=>dev.dept==='design')

paintDeveloper(design)
});
// backend  
document.getElementById('backend').addEventListener('click',()=>
 {
let back_end = developers.filter((dev)=>dev.dept==='backend')

paintDeveloper(back_end)
});
// implment a search





document.getElementById('search_btn',).addEventListener('change',(e)=>{


	let searchValue=e.target.value;
	let searcResults=developers.filter((dev)=>{
		return dev.name.toLowerCase().includes
		(searchValue.toLowerCase())
		
	});

	paintDeveloper(searcResults)

});
