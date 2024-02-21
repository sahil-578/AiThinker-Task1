const express = require("express");

const mySqlConnection = require("./connection");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));


// CRUD OPERATIONS

app.get("/", (req, res) => {
    const sql = "SELECT * FROM users";
    mySqlConnection.query(sql, (err, result) => {
        if (err) throw err;
        res.render("index", { users: result });
    });
    // res.sendFile(__dirname + '/index.html')
});




app.post("/submit", (req, res) => {
    const { name, message, phone, email } = req.body;

    const sql =
        "INSERT INTO users (name, message, phone, email) VALUES (?, ?, ?, ?)";
    mySqlConnection.query(sql, [name, message, phone, email], (err, result) => {
        if (err) {
            // res.send("Error submitting data");
            throw err;
        }
        // res.json({msg : "Inserted the record successfully"});
        res.redirect("/");
        // res.send("Data Submitted");
    });
});


// update user info

app.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const { name, message, phone, email } = req.body;

    const sql =
        "UPDATE users SET name = ? , message = ? , phone = ? , email = ? WHERE id = ?";

    mySqlConnection.query(
        sql,
        [name, message, phone, email, id],
        (err, result) => {
            if (err) throw err;
            // res.json({msg : "Updated the record successfully"});
            res.redirect('/');
        }
    );
});


// delete a user by their ID

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM users WHERE id = ?";

    mySqlConnection.query(sql, [id], (err, result) => {
        if (err) throw err;
        // res.json({msg : "Deleted record successfully"});
        res.redirect("/");
    });
});


app.listen(8000, () => {
    console.log("Express Server is running on port 3000");
});