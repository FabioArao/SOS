const express = require("express");
const app = express();
const cors = require ("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a user

app.post("/sosusers", async(req, res) => {
    try {

        const { fname , lname , urole } = req.body;
        const newUser = await pool.query ("INSERT INTO sosusers (fname, lname, urole) VALUES ($1, $2, $3) RETURNING *", [fname, lname, urole]);
        
        res.json(newUser.rows)

    } catch (err) {
        console.error(err.message);        
    }
});

//get all user
app.get("/sosusers", async(req, res) => {
    try {

        const allUsers = await pool.query("SELECT * FROM sosusers");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message)
    }
});

//get a user

app.get("/sosusers/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM sosusers WHERE users_id = $1", [id])

        res.json(user.rows[0])
    } catch (err) {
        console.error(err.message);        
    }
});

//update a user

app.put("/sosusers/:id", async(req, res) => {
    try {
       const { id } = req.params;
       const { fname, lname, urole } = req.body;
       const updateUser = await pool.query("UPDATE sosusers SET fname = $1, lname = $2, urole = $3 WHERE users_ID = $4", [fname, lname, urole, id]);

       res.json("user has been updated");

    } catch (err) {
        console.error(err.message);
    }
})

//delete a user

app.delete("/sosusers/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("DELETE FROM sosusers WHERE users_id = $1", [id])

        res.json("user has been deleted");
    } catch (err) {
        console.error(err.message);        
    }
});


app.listen(2000, () =>{
    console.log("server has started on port 2000");
});