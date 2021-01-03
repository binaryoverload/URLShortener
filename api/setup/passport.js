const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const config = require('../config.json');
const { options } = require('../routes/url');
const e = require('express');

const users = [{
    username: "admin",
    password: "admin"
}];

module.exports = {
    setupPassport() {

        passport.serializeUser(function(user, done) {
            done(null, user.username);
        });

        passport.deserializeUser(async function(username, done) {
            done(null, users.find(u => u.username === username))
        });

        passport.use(new LocalStrategy({ usernameField: "username", passwordField: "password" }, function(username, password, done) {
            console.log(username, password)
            let user = users.find(u => u.username === username && u.password === password);
            if (!user) {
                return done(null, false /*,  { message: 'Incorrect username or password.' } */ )
            }
            done(null, user)
        }));
    }
};