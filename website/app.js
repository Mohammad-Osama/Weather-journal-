// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Global Variables */
const key = '1c82219adec930f1fbfb9a2bcc3f0ab2' ; 

 //  event listener on the generate button to execute the code when clicked 
 const generateButton = document.getElementById('generate') ; 
 generateButton.addEventListener('click',weather) ;         // 16505
 async function  weather() {   // asynchronous function to run across the whole code  
    const zip = document.getElementById('zip').value ;   
    console.log(zip);
       // getting the data from the provided weather api 
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}` ;
    const response = await fetch(url) ;
    const data = await response.json() ;  // converting to readable data 
    console.log(data);



























    
 }





   /*  console.log(newDate);
     console.log(projectData);
     async function myGetRequest() {
      let res = await fetch('/y');
      let data = await res.text();
      console.log(data);
    }
    myGetRequest(); */