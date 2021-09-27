// Setup empty JS object to act as endpoint for all routes
 projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to read the data.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require ('cors') ;
 // const { response } = require('express');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
                                               // 16505
//setting up the port 
const myPort = 7000 ;                    
const myServer = app.listen (myPort , ()=>{console.log(`Server running on port ${myPort}`)}
);


// the post route 

app.post('/save' , (req,res)=>{
    projectData = req.body ;                    //adding the data to projectData object 
    //console.log(projectData.main) ;

     // res.write(projectData.main) ; 
   //res.send(projectData.main)  ; 
   // res.send({projectData.main.toString(), projectData.sys.toString()});
    // res.send({req.body.main , req.body.sys} ) ;
    //res.send(req.body.sys) ; 
    // res.end();
       
})      


/* app.get('/y' , (req,response)=>{
    response.send(console.log("asdasdasdasd"));
}); */




