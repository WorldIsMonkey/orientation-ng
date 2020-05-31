/*jshint esversion: 6 */

// set up part, add packages to this part
// placeholder for backend
// using node.js express framework 
const express = require('express');
// websocket
const expressWs = require('express-ws');
// set up
const app = new express();
expressWs(app);
//session for login
const session = require('express-session');
// port for the backend
const port = 3000;
// parser
const bodyParser = require('body-parser');
app.use(express.static('static'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const mongo = require('mongodb');


app.get('/api/example', (req, res) => res.send('Hello World!'))


// listen to the port listed above
app.listen(port, () => {
    console.log(`server started, listening at ${port}`);
});