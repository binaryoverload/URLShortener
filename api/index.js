const config = require('./config.json');

const { db, setupExpress, setupPassport } = require("./setup");

async function start() {

    setupPassport();

    const app = setupExpress();

    app.listen(config.port, () => {
        console.log(`SSPP Link Shortener listening on port ${config.port}!`)
    });
}

start()
    .catch(err => console.error("An error occurred", err));