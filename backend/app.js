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

// use mongoDB
const mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var dburl = "mongodb://localhost:27017/"; 

// enable cookie
const cookie = require('cookie');

// using session for login
app.use(session({
    secret: 'please change this secret',
    resave: false,
    saveUninitialized: true,
    cookie: {HttpOnly: true, sameSite: true, Secure: true}
}));



// check cookie?
app.use(function(req, res, next){
    var username = (req.session.username)? req.session.username : '';
    res.setHeader('Set-Cookie', cookie.serialize('username', username, {
          path : '/', 
          maxAge: 60 * 60 * 24 * 7 // 1 week in number of seconds
    }));
    next();
});

app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url, req.body);
    next();
});

var isAuthenticated = function(req, res, next) {
    if (!req.session.username) return res.status(401).end("access denied");
    next();
};

// sign in
app.post('/signin/', function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    // get username and password
    var username = req.body.username;
    var password = req.body.password;
    // retrieve user from the database
    MongoClient.connect(dburl, function(err, db) {
        if (err) throw err;
        var dbo = db.db("wim");
        // find obj by username
        dbo.collection("users").findOne({user: username}, function(err, result) {
          if (err) throw err;
          if (!result) return res.status(401).end("access denied");
          console.log(result);
          // check password
          if (result.password!== password) return res.status(401).end("access denied"); // invalid password
            // start a session
            req.session.username = result.username;
            res.setHeader('Set-Cookie', cookie.serialize('username', result.username, {
              path : '/', 
              maxAge: 60 * 60 * 24 * 7 // 1 week in number of seconds
            }));
            db.close();  
            return res.json("user " + username + " signed in");
        });
      });
});

// sign out
app.get('/signout/', function (req, res, next) {
    req.session.destroy();
    res.setHeader('Set-Cookie', cookie.serialize('username', '', {
          path : '/', 
          maxAge: 60 * 60 * 24 * 7 // 1 week in number of seconds
    }));
    res.redirect('/');
});

// sign up, probably not using it
app.post('/signup/', function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    var username = req.body.username;
    var password = req.body.password;
    MongoClient.connect(dburl, function(err, db) {
        if (err) throw err;
        var dbo = db.db("wim");
        // find obj by username
        dbo.collection("users").findOne({username: username}, function(err, result) {
            if (err) return res.status(500).end(err);
            if (result) return res.status(409).end("username " + username + " already exists");
            // will add salt and hashed later
            var user = {username: username,
                        password: password};

            dbo.collection("users").insertOne(user, function(err, res) {
                if (err) throw err;
                console.log("1 user inserted");
                db.close();
            })
        })
    });
});


app.get('/api/example', (req, res) => res.send('Hello World!'));


// add salt to save the username and password
// will apply these in the future
function generateSalt (){
    return crypto.randomBytes(16).toString('base64');
}

function generateHash (password, salt){
    var hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    return hash.digest('base64');
}

// listen to the port listed above
app.listen(port, () => {
    console.log(`server started, listening at ${port}`);
});