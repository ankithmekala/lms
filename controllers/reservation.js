const express = require('express');
const db = require("../models");
const Reservation = db.reservation;
//const Op = db.Sequelize.Op;
// Create and Save a new reservation
exports.create = (req, res, next) => {
    // Validate request
    console.log('reservation')
    console.log(req.body)
    if (!req.body.reservation_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }
      // Create a book
    const reservation = {
    reservation_id: req.body.reservation_id,
    book_id: req.body.book_id,
    user_id: req.body.user_id,
    reservation_date: req.body.reservation_date
  };
  // Save reservation in the database
  console.log('reservation',reservation)
  Reservation.create(reservation)
    .then(data => {
     res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the reservation."
      });
    });
};

// Find a single book with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Reservation.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(400).send({
            message: `Cannot find reservation with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving reservation with id=" + id
        });
      });
};
// Delete reservation with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Reservation.destroy({
    where: { reservation_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "reservation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete reservation with id=${id}. Maybe reservation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete reservation with id=" + id
      });
    });
};