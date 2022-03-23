const fs = require("fs");
var iterations = 0;
var readline = require('readline');
var rl = readline.createInterface(
     process.stdin, process.stdout);
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');const app = express();
var http = require('http');
var number = 0;
var finish,finID;
app.get("/sus", (req, res) => {
res.sendFile(__dirname + '/sus.html');
});
app.get("/", (req, res) => {
          let id = req.query.id;
      if(id){
        var data = require('./mscz.json');
  var number = id;
  console.log("fetching file...");
for(var i = 0;i<30000;i++){
  if(data[i].id == number){
        iterations++;
var finish = data[i].ref;
    var finID = data[i].id;
    console.log("found file! Iteration "+iterations);
    console.log("http://ipfs.io"+data[i].ref);
  }
}
    res.redirect('/sus#'+finish);
        console.log("redirected")
      }else{
          res.sendFile(__dirname + '/index.html');
      }
  
  
    })



app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});