const express = require('express');
const { message } = require('statuses');
const db = require("../models");
const category = require('../models/category');
const Category = db.category;

//create and save the category
exports.create = (req, res, next) => {
    //validate request
    if(!req.body.category_Name) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    //create a category
    const category = {
        category_id: req.body.category_id,
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

//find all categories
exports.findAll = (req, res) => {
    const alldata = req.query.category_id;
    console.log(alldata);
    var condition = alldata ? { alldata: { [Op.iLike]: `%${alldata}%` } } : null;
    console.log(condition);
    Category.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

//Delete category with id 
exports.delete = (req, res) => {
    const id = req.params.id;
    Category.destroy({
        where: { category_id: id }
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
            message: "Could not Delete category with id=" + id
        });
    });
};

//Update 

exports.update = (req, res) => {
    const id = req.params.id;
    Category.update(req.body, {
      where: { category_id: id }
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