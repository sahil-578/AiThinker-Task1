const express = require("express");
const userModel = require("../models/user");

const router = express.Router();

// router.get("/", (req, res) => {
//     userModel.find((err, result) => {
//         if (err) {
//             console.error("Error fetching users:", err);
//             res.status(500).send("Error fetching users");
//         } else {
//             res.render("index", { users: result });
//         }
//     });
// });



router.get("/", (req, res) => {
    userModel.find()
      .then((result) => {
        res.render("index", { users: result });
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        res.status(500).send("Error fetching users");
      });
  });



// router.get("/viewdata", (req, res) => {
//     userModel.find((err, result) => {
//         if (err) {
//             console.error("Error fetching user data:", err);
//             res.status(500).send("Error fetching user data");
//         } else {
//             res.render("viewdata", { users: result });
//         }
//     });
// });




router.get("/viewdata", (req, res) => {
    userModel.find()
      .then((result) => {
        res.render("viewdata", { users: result });
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        res.status(500).send("Error fetching users");
      });
  });





// router.post("/submit", (req, res) => {
//     const { name, message, phone, email } = req.body;
//     const newUser = new userModel({ name, message, phone, email });
//     newUser.save((err, result) => {
//         if (err) {
//             console.error("Error submitting data:", err);
//             res.status(500).send("Error submitting data");
//         } else {
//             res.redirect("/");
//         }
//     });
// });






router.post("/submit", (req, res) => {
    const { name, message, phone, email } = req.body;
    const newUser = new userModel({ name, message, phone, email });
  
    newUser
      .save()
      .then(() => {
        console.log("User saved successfully");
        res.redirect("/");
      })
      .catch((err) => {
        console.error("Error saving user:", err);
        res.status(500).send("Error saving user");
      });
  });




  

// router.get("/update", (req, res) => {
//     const userId = req.query.id;
//     userModel.findById(userId, (err, result) => {
//         if (err) {
//             console.error("Error fetching user:", err);
//             res.status(500).send("Error fetching user");
//         } else {
//             res.render("update", { user: result });
//         }
//     });
// });





router.get("/update", (req, res) => {
    const userId = req.query.id;
    userModel.findById(userId)
      .then((result) => {
        res.render("update", { user: result });
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        res.status(500).send("Error fetching user");
      });
  });





// router.post("/update/:id", (req, res) => {
//     const userId = req.params.id;
//     const { name, message, phone, email } = req.body;
//     userModel.findByIdAndUpdate(userId, { name, message, phone, email }, (err, result) => {
//         if (err) {
//             console.error("Error updating record:", err);
//             res.status(500).send("Error updating record");
//         } else {
//             res.redirect("/viewdata");
//         }
//     });
// });





router.post("/update/:id", (req, res) => {
    const userId = req.params.id;
    const { name, message, phone, email } = req.body;
    userModel.findByIdAndUpdate(userId, { name, message, phone, email })
      .then(() => {
        res.redirect("/viewdata");
      })
      .catch((err) => {
        console.error("Error updating user:", err);
        res.status(500).send("Error updating user");
      });
  });





// router.post("/delete/:id", (req, res) => {
//     const userId = req.params.id;
//     userModel.findByIdAndDelete(userId, (err, result) => {
//         if (err) {
//             console.error("Error deleting record:", err);
//             res.status(500).send("Error deleting record");
//         } else {
//             res.redirect("/viewdata");
//         }
//     });
// });






router.post("/delete/:id", (req, res) => {
    const userId = req.params.id;
    userModel.findByIdAndDelete(userId)
      .then(() => {
        res.redirect("/viewdata");
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
        res.status(500).send("Error deleting user");
      });
  });





module.exports = router;
