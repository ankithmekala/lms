const express = require('express');
const { message } = require('statuses');
const db = require("../models");
const Category = db.category;

//create and save the category
exports.create = (req, res, next) => {
    //validate request
    if(!req.body.category_id) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    //create a category
    const category = {
        category_Id: req.body.category_id,
        category_Name: req.body.category_Name
    };
    Category.create(category)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured."
        });
    });
};

//Find a category with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Category.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(400).send({
                message: `Cannot find category with id = ${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error occured"
        });
    });
};

//Delete category with id 
exports.delete = (req, res) => {
    const id = req.params.id;
    Category.destory({
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Category was deleted successfully."
            });
        } else {
            res.send({
            message: `Cannot delete the category with id=${id}.`
        });
      }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not Delete category"
        });
    });
};

//Update 

exports.update = (req, res) => {
    const id = req.params.id;
    Category.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Category was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Category with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Category with id=" + id
        });
      });
  };