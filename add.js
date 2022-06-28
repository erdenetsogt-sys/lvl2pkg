const express = require('express');
const router = express.Router();
router.use(express.json());
const UserModel = require("../models/User");
const bcrypt = require('bcrypt');


router.get("/", (req, res) => {
    res.render("add");
});


module.exports = router;