let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let a=document.getElementById("a");
let day=document.getElementById("Day");
let month=document.getElementById("month");
let num=document.getElementById("num");
let curr=new Date();
if(curr.getHours()<12){
     a.innerHTML='AM';
}
else{// Getting DOM elements
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let a = document.getElementById("a");
let day = document.getElementById("Day");
let month = document.getElementById("month");
let num = document.getElementById("num");

// Day and Month names
const days = [
  "Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday"
];

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

// Function to update clock
function updateClock() {
  let curr = new Date();

  // AM / PM
  a.innerHTML = curr.getHours() < 12 ? "AM" : "PM";

  // Hours
  hrs.innerHTML = curr.getHours().toString().padStart(2, "0");

  // Minutes
  min.innerHTML = curr.getMinutes().toString().padStart(2, "0");

  // Seconds
  sec.innerHTML = curr.getSeconds().toString().padStart(2, "0");

  // Day, Month, Date
  day.innerHTML = days[curr.getDay()];
  month.innerHTML = months[curr.getMonth()];
  num.innerHTML = curr.getDate();
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);

    a.innerHTML='PM';
}
day.innerHTML=curr.getDay();
month.innerHTML=curr.getMonth();
num.innerHTML=curr.getDate();
if(curr.getDay()==0){
    Day.innerHTML="Sunday";
}
if(curr.getDay()==1){
    Day.innerHTML="Monday";
}
if(curr.getDay()==2){
    Day.innerHTML="Tuesday";
}
if(curr.getDay()==3){
    Day.innerHTML="Wednesday";
}
if(curr.getDay()==4){
    Day.innerHTML="Thursday";
}
if(curr.getDay()==5){
    Day.innerHTML="Friday";
}
if(curr.getDay()==6){
    Day.innerHTML="Saturday";
}
if(curr.getMonth()==0){
    month.innerHTML="January";
}
if(curr.getMonth()==1){
    month.innerHTML="Feburary";
}
if(curr.getMonth()==2){
    month.innerHTML="March";
}
if(curr.getMonth()==3){
    month.innerHTML="April";
}
if(curr.getMonth()==4){
    month.innerHTML="May";
}
if(curr.getMonth()==5){
    month.innerHTML="June";
}
if(curr.getMonth()==6){
    month.innerHTML="July";
}
if(curr.getMonth()==7){
    month.innerHTML="August";
}
if(curr.getMonth()==8){
    month.innerHTML="September";
}
if(curr.getMonth()==9){
    month.innerHTML="Otober";
}
if(curr.getMonth()==10){
    month.innerHTML="November";
}
if(curr.getMonth()==11){
    month.innerHTML="December";
}
setInterval(() => {
    let curr=new Date();
    if(curr.getHours()<10){
        hrs.innerHTML='0'+curr.getHours();
    }else{
        hrs.innerHTML=curr.getHours();
    }
    if(curr.getMinutes()<10){
        min.innerHTML='0'+curr.getMinutes();
    }
    else{
        min.innerHTML=curr.getMinutes();
    }
    if(curr.getSeconds()<10){
        sec.innerHTML='0'+curr.getSeconds();
    }
    else{
        sec.innerHTML=curr.getSeconds();
    }
}, 1000);
