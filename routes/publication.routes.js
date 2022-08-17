const publication = require("../controllers/publication");
var router = require("express").Router();
// Create a new publication
router.post("/publication", publication.create);
//get publication with id
router.get("/publication/:id", publication.findOne);
// Delete a publication with id
router.delete("/publication/:id", publication.delete);
module.exports = router;