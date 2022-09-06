//const book = require("../models/book.js");


    const book = require("../controllers/book");
    var router = require("express").Router();
    // Create a new book
    router.post("/book", book.create);
    //get book with id
    router.get("/book/:id", book.findOne);
    //get all books
    router.get("/book", book.findAll);
    // Delete a book with id
    router.delete("/book/:id", book.delete);
    // update a book with id
    router.put("/book/:id", book.update);
module.exports = router;
