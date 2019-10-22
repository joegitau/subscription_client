const path = require("path");
const express = require("express");
const db = require("./db/db");

const app = express();

const users = require("./routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/users", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server running on port " + PORT));
