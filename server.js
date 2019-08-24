// server.js

const express = require('express')
const path = require('path')
const app = express()

//setup/////////////////////////////////

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.locals.basedir = path.join(__dirname, './')
app.use(express.static(path.join(__dirname, 'public')));

//function//////////////////////////////

app.get('/', function (req, res) {
	res.render('index')
})

app.post('/', function (req, res) {
	//
})

app.listen(3000, function () {
	console.log('listening port: 3000')
})