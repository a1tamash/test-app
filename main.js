require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/hello", (req, res) => {
	res.send("hey this is altamash");
});

app.listen(process.env.PORT, () => {
	console.log(`Example app listening on port ${process.env.PORT}`);
});
