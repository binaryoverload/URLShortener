const e = require('express');
const express = require('express')
const router = express.Router()
const passport = require('passport');
const config = require("../config.json")
const base64url = require('base64url');
const auth = require('../middleware/auth');

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/api/login'
    })
);

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        req.logout()
        res.redirect('/')
    })
})

module.exports = router