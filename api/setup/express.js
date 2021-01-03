const express = require('express');
const path = require("path");
const session = require('express-session');
const expressLogging = require('express-logging')
const passport = require('passport');
const config = require('../config.json');
const { authRouter, urlRouter } = require("../routes");
const { authMiddleware } = require("../middleware");
const serveIndex = require('serve-index');

module.exports = {
    setupExpress() {
        const app = express();
        app.use(express.urlencoded({ extended: true }))

        // middleware
        app.use(expressLogging(console))

        app.use(session({ secret: "hi" }));
        app.use(passport.initialize());
        app.use(passport.session());

        // routes
        app.use("/api", authRouter);
        app.use("/", urlRouter);

        app.use("/", express.static("../frontend/dist"), serveIndex("../frontend/dist"))
        app.use((req, res) => res.sendFile(path.join(__dirname, "../../frontend/dist/index.html")))

        return app;
    }
};