//const book = require("../models/book.js");


    const book = require("../controllers/book");
    var router = require("express").Router();
    // Create a new book
    router.post("/book", book.create);
    //get book with id
    router.get("/book/:id", book.findOne);
    // Delete a book with id
    router.delete("/book/:id", book.delete);
module.exports = router;
