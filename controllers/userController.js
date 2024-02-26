const express = require("express");
const userModel = require("../models/user");

const router = express.Router();

router.get("/", (req, res) => {
    userModel.getUsers((err, result) => {
        if (err) {
            console.error("Error fetching users:", err);
            res.status(500).send("Error fetching users");
        } else {
            res.render("index", { users: result });
        }
    });
});

router.get("/viewdata", (req, res) => {
    userModel.getUsers((err, result) => {
        if (err) {
            console.error("Error fetching user data:", err);
            res.status(500).send("Error fetching user data");
        } else {
            res.render("viewdata", { users: result });
        }
    });
});

router.post("/submit", (req, res) => {
    const { name, message, phone, email } = req.body;
    userModel.insertUser(name, message, phone, email, (err, result) => {
        if (err) {
            console.error("Error submitting data:", err);
            res.status(500).send("Error submitting data");
        } else {
            res.redirect("/");
        }
    });
});

router.get("/update", (req, res) => {
    const userId = req.query.id;
    userModel.getUserById(userId, (err, result) => {
        if (err) {
            console.error("Error fetching user:", err);
            res.status(500).send("Error fetching user");
        } else {
            res.render("update", { user: result[0] });
        }
    });
});

router.post("/update/:id", (req, res) => {
    const userId = req.params.id;
    const { name, message, phone, email } = req.body;
    userModel.updateUser(userId, name, message, phone, email, (err, result) => {
        if (err) {
            console.error("Error updating record:", err);
            res.status(500).send("Error updating record");
        } else {
            res.redirect("/viewdata");
        }
    });
});

router.post("/delete/:id", (req, res) => {
    const userId = req.params.id;
    userModel.deleteUser(userId, (err, result) => {
        if (err) {
            console.error("Error deleting record:", err);
            res.status(500).send("Error deleting record");
        } else {
            res.redirect("/viewdata");
        }
    });
});

module.exports = router;
