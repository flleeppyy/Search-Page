const express = require("express")
const app = express()
const fs = require("fs")
const os = require("os")
const path = require("path")
const log = require('./modules/logger') // Simple logger. Usage: log.log("thing to log") or log.echo("thing to log that also logs to console")



/*
let cum = []
const chenfolder = 'D:/Development things/Website/Search Page/public/backgrounds';
fs.readdirSync(chenfolder).forEach(file => {
    
    cum.push(file)
})
console.info(cum)
*/

//const cheerio = require('cheerio'); // Is already installed. Just uncomment
const port = 8000 //listening port

app.use('/', express.static(__dirname + '/public')) // Static route; DO NOT ADD TRAILING SLASH IN EXPRESS.STATIC

app.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, 'public/favicon.ico'))) // Just for extra measure
app.get('/', (req, res) => { // The index page   
    try {
        console.info(`IP: ${req.ip} Requested ${req.url}`) // just do some logging
        res.sendFile(path.join(__dirname, 'public/index.html'))
    } catch (error) {
        console.error(`IP: ${req.ip} recieved error: ${error}`) // just do some logging
        res.status(404).sendFile(path.join(__dirname, 'public/404.html')) // show an error page (just sending pure html text wont cut it)
    }
});

app.listen(port || 8000, console.log(`Listening on http://localhost:${port}`))