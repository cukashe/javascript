//date object

function makeDate(){
    let currentDate = new Date
// document.write(currentDate)

    let seconds =currentDate.getSeconds()
    let mins =currentDate.getMinutes()
    let hours =currentDate.getHours()
    let day =currentDate.getDay()
    let date =currentDate.getDate()
    let month  =currentDate.getMonth()
    let year =currentDate.getFullYear()
   
  
    
    if(seconds<10){
        seconds=`0${seconds}`
    }
    if(hours<10){
        hours=`0${hours}`
    }
    if(mins<10){
        mins=`0${mins}`
    }

    //greetings part
function greetingM(){
    
    if(hours > 0 && hours <12){
        newS = 'Good morning'
    }
    else if(hours > 12 && hours < 4){
        newS = 'Good afternoon'
    }
    else{
        newS = 'Good evening'
    }
}
greetingM()
  // to show if am or pm part
function showingAmPm (){
    if(hours>0 &&  hours<12){
        timeDifference= 'am'
    }else if(hours>=12 && hours<24){
        timeDifference='pm'
    }

}showingAmPm()
 
  

    console.log()
    let days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let formattedDay=days[day]
    
    
    
    let months=['January','February','March','April','May','June','July','Aguast','September','October','November','December']
    let formattedMonth=months[month]
   
    
    let clock=`${formattedDay},${formattedMonth},${date} ,${hours}:${mins}:${seconds}`
    
 

    
    document.getElementById('day').innerHTML=formattedDay
    document.getElementById('date').innerHTML=date
    document.getElementById('month').innerHTML=formattedMonth
    document.getElementById('year').innerHTML=year
    document.getElementById('hours').innerHTML=hours
    document.getElementById('mins').innerHTML=mins
    document.getElementById('sec').innerHTML=seconds
    document.getElementById('greet').innerHTML=newS
    document.getElementById('man').innerHTML=timeDifference
  

}
setInterval(makeDate,1000);




// to do 
// styl  the clock
// am/ pm
//gretting if it 
//-good morning
//-good afternoon
//-goodevening

//bonous post fixt