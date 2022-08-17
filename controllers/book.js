const express = require('express');
const db = require("../models");
const Book = db.book;
//const Op = db.Sequelize.Op;
// Create and Save a new book
exports.create = (req, res, next) => {
    // Validate request
    console.log('book')
    console.log(req.body)
    if (!req.body.book_Title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }
      // Create a book
    const book = {
    book_Id: req.body.book_Id,
    unique_Id: req.body.unique_Id,
    book_Title: req.body.book_Title,
    author: req.body.author,
    publication_Year: req.body.publication_Year,
    no_Of_Copies: req.body.no_Of_Copies
  };
  // Save book in the database
  console.log('books',Book)
  Book.create(book)
    .then(data => {
     res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Book."
      });
    });
};

// Find a single book with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Book.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(400).send({
            message: `Cannot find book with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving book with id=" + id
        });
      });
};
// Delete book with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Book.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "book was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete book with id=${id}. Maybe Book was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete book with id=" + id
      });
    });
};