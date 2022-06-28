const express = require('express');
const app = express();

const db = require("./models/index.js");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
}).catch((err) => {
    console.log("Failed to sync db: " + err.message);
});
//Test DB
//db.authenticate()
//.then(() => console.log('Database Connected'));

app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});
});
app.listen(3000, function () {
    console.log("Server is running on localhost:3000");
});