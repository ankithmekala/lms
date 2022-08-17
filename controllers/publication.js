const express = require('express');
const db = require("../models");
const Publications = db.publication;
//const Op = db.Sequelize.Op;
// Create and Save a new publication
exports.create = (req, res, next) => {
    // Validate request
    //console.log('publication')
    //console.log(req.body)
    if (!req.body.publisher_Name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }
      // Create a publication
    const publisher = {
        publication_Id: req.body.publication_id,
        publisher_Name: req.body.publisher_Name,
    };
  // Save book in the database
  //console.log('publications',Publications)
    Publications.create(publisher)
    .then(data => {
     res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the publication."
      });
    });
};

// Find a single publisher with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Publications.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(400).send({
            message: `Cannot find publisher with id=${id}.`
          });
        }
    })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving publisher with id=" + id
        });
    });
};
// Delete book with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Publications.destroy({
       where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "publication was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete publication with id=${id}. Maybe publication was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete publisher with id=" + id
      });
    });
};