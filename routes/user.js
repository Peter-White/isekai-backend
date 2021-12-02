const { Router } = require('express');
const router = Router();
const userCons = require("../controllers/user");

router.get("/", userCons.getUsers);
router.get("/:id", userCons.getUser);

module.exports = router;