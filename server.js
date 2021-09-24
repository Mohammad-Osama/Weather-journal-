// Setup empty JS object to act as endpoint for all routes
// projectData = {};

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
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

//setting up the port 
const myPort = 7000 ; 
const myServer = app.listen (myPort , ()=>{console.log(`Server running on port ${myPort}`)}
);







