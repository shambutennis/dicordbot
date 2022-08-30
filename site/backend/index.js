const express = require('express');
const app = express();
var session = require('express-session');
const passportSetup = require('./config/passport-setup')
const passport = require('passport');
const port = 4000;


app.use(passport.initialize());
app.use(session({secret: 'SECRET'}));

app.get("/auth/discord", passport.authenticate("discord", {permissions: 8 }));
app.get("/auth/discord/callback", passport.authenticate('discord', {
    failureRedirect: '/'
}), function(req,res) {
    res.redirect("http://localhost:3000/")
});


app.listen(port, ()=> console.log("server is running"));
