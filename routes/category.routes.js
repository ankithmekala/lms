const category = require("../controllers/category");
var router = require("express").Router();
//create 
router.post("/category", category.create);
//get category with id 
router.get("/category/:id", category.findOne);
//get all
router.get("/category", category.findAll);
//Delete a category with id 
router.delete("/category/:id", category.delete);
//update a category 
router.put("/category/:id", category.update);
module.exports = router;