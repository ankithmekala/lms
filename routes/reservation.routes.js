const reservation = require("../controllers/reservation");
var router = require("express").Router();
// Create a new book
router.post("/reservation", reservation.create);
//get book with id
router.get("/reservation/:id", reservation.findOne);
// Delete a book with id
router.delete("/reservation/:id", reservation.delete);
module.exports = router;
