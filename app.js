const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const categoryRoutes = require("./routes/category.routes.js");
const reservationRoutes = require("./routes/reservation.routes.js")
const bookRoutes = require("./routes/book.routes.js");
const publicationRoutes = require("./routes/publication.routes.js")
const db = require("./models/index.js");
db.sequelize.sync()
  .then(() => {
    //console.log("Synced db.");
}).catch((err) => {
    //console.log("Failed to sync db: " + err.message);
});
//Test DB
//db.authenticate()
//.then(() => console.log('Database Connected'));
app.use(bodyparser.json())
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    console.log('getting html')
    res.sendFile('index.html', {root: __dirname});
});
app.use("/api", bookRoutes)
app.use("/api", reservationRoutes)
app.use("/api", categoryRoutes)
app.use("/api", publicationRoutes)
app.listen(3000, function () {
    console.log("Server is running on localhost:3000");
});