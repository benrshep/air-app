const http = require('http');
const fetch = require('node-fetch');
const express = require('express');
const ejs = require('ejs');
const path = require("path");

var app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;

let url = "http://192.168.86.34/json";

let settings = {method: "Get"};

app.get('/', (req, res) => {
	var url = "http://192.168.86.34/json"
	fetch(url, settings)
	.then(res => res.json())
	.then((data) => {
		res.render('index', {data});
	});
});

app.listen(PORT);
