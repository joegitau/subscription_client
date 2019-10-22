const express = require("express");
const faker = require("faker");
const db = require("../db/db");

const router = express.Router();

router.get("/", (req, res) => {
  const q = "SELECT COUNT(*) AS total_users FROM users";
  db.query(q, (err, result) => {
    if (err) throw err;
    const count = result[0].total_users;
    res.render("index", { count });
  });
});

router.post("/", (req, res) => {
  const user = {
    email: req.body.email,
    created_at: faker.date.recent
  };
  const q = "INSERT INTO users SET ?";
  db.query(q, user, (err, result) => {
    if (err) throw err;
    res.redirect("users");
  });
});

// create single user
// const user = { email: "joe@karanja.com" };
// db.query("INSERT INTO users SET ?", user, (error, results) => {
//   if (error) throw error;
//   console.log(results[0]);
// });

// create single user using faker
// const user = { email: faker.internet.email() };
// db.query("INSERT INTO users SET ?", user, (err, result, fields) => {
//   if (err) throw err;
//   console.log(result);
// });

// create multiple users
// const users = [
//   ["blah@gmail.com", "2019-10-12 09:24:20"],
//   ["mimi@gmail.com", "2019-10-10 12:45:00"],
//   ["wewe@gmail.com", "2019-11-07 07:20:17"]
// ];

// create multiple users using faker
// const users = [];

// for (let u = 0; u < 100; u++) {
//   users.push([faker.internet.email(), faker.date.past()]);
// }

// const q = "INSERT INTO users(email, created_at) VALUES ?";

// db.query(q, [users], (err, result) => {
//   if (err) throw err;
//   console.log(result);
// });

// select users
// const q = "SELECT COUNT(*) AS total_users FROM users";
// db.query(q, (error, result, fields) => {
//   if (error) throw error;
//   console.log(result[0].total_users);
// });

module.exports = router;
