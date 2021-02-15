// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
const htmlRouter = require('./routes/html-routes.js');
const apiRouter = require('./routes/api-routes.js');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring sequelize model 
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
//htmlRouter(app);
//apiRouter(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`\n Listening on PORT ${PORT} (http://localhost:${PORT})`));
});