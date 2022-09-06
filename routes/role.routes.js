const roles = require("../controllers/role");
var router = require("express").Router();

// Create a new Role
router.post("/roles", roles.createRole);

router.get("/roles", roles.findAll);

router.get("/roles/:id", roles.findOne);

router.put("/roles/:id", roles.update);

router.delete("/roles/:id", roles.delete);

module.exports = router;