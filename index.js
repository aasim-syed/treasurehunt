const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');


let port = process.env.PORT;
if(port == null || port == ""){
    port = 8000;
}

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const passportGoogle = require('./config/passport-google-oauth2-strategy');

const MongoStore = require('connect-mongo')(session);

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('assets'));

const db = require('./config/mongoose');

// app.use(expressLayouts);

// app.set('layout extractStyles', true);
// app.set('layout extractScripts', true);

// setup view engine as ejs
app.set('view engine', 'ejs');
app.set('View','./views');


// mongo store is used to store session cookie
app.use(session({
    name: 'innohunt',
    // todo change the secret before deployment
    secret: 'dudapi',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge : (1000 * 60 * 1000)
    }
    ,
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongodb setup ok');
        }
    )
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));

app.listen(process.env.PORT || port, function(err){
    if(err){
        console.log(`Error on running the server : ${err}`);
    }
    console.log(`Server is succesfully running on the port  : ${port} `);
});