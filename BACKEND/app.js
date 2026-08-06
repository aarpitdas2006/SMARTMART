require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("SmartMart Backend is Running...");
});


app.post("/subscribe", (req, res) => {

    const { email } = req.body;

    const sql = "INSERT INTO subscribers (email) VALUES (?)";

    db.query(sql, [email], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.json({
            message: "Subscribed Successfully!"
        });

    });

});


app.post("/register", (req, res) => {

    const { name, email, password } = req.body;

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query(sql, [name, email, password], (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                message: "Registration Failed"
            });

        }

        res.json({
            message: "Registration Successful!"
        });

    });

});
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const sql =
        "SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (result.length > 0) {
            res.json({
                message: "Login Successful"
            });
        } else {
            res.status(401).json({
                message: "Invalid Email or Password"
            });
        }

    });

});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});