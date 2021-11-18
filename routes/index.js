const { Router } = require('express');
const router = Router();
const userRoutes = require('./user');

router.get('/', (req, res) => res.send('This is root!'));
router.get("/users", userRoutes);

module.exports = router;