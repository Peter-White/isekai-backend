const { Router } = require('express');
const router = Router();
const userCons = require("../controllers/user");

router.get("/", userCons.getUsers);
// router.get("/:id", (req, res) => res.send("User"));

module.exports = router;