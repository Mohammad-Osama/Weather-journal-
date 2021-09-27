// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Global Variables */
const key = '1c82219adec930f1fbfb9a2bcc3f0ab2' ; 

 //  event listener on the generate button to execute the code when clicked 
 const generateButton = document.getElementById('generate') ; 
 generateButton.addEventListener('click',weather) ;         // 16505
 async function  weather() {   // asynchronous function to run across the whole code  
    const feelings  = document.getElementById('feelings').value ; 
    const zip = document.getElementById('zip').value ;   
    // console.log(zip);
       // getting the data from the provided weather api 
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}` ;
    const response = await fetch(url) ;
    const data = await response.json() ;  // converting from json format  
    // console.log(data);
    // console.log(data.main.temp);   
           // posting data to the server 
    await fetch('/save',{   // using the post route to post the fetched data
      method: "POST",              
      credentials: "same-origin",
      headers:{
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)    // converting the data to json format         
    });

      /* console.log(newdata); 
     const reqs = await newdata.json() ; 
     console.log(reqs) ; 
    const reqsJson  = await JSON.stringify(reqs) ; 
    console.log (reqsJson) ;  */


    const calledData = await fetch('/call') ; // using the get route to get data from server 
    const final = await calledData.json()
     // console.log (final.temp) ; 
       //changing the dom elements with the required data 
    document.getElementById('date').innerHTML     = 'date                   '+                    newDate ; 
    document.getElementById('temp').innerHTML     = 'temperature'+  final.temp ;
    document.getElementById('content').innerHTML  = 'you were feeling'+  feelings ; 

 }





   /*  console.log(newDate);
     console.log(projectData);
     async function myGetRequest() {
      let res = await fetch('/y');
      let data = await res.text();
      console.log(data);
    }
    myGetRequest(); */