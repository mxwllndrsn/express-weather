// server.js

const express = require('express')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.locals.basedir = path.join(__dirname, './')

app.get('/', function (req, res) {
	res.render('index')
})

app.listen(3000, function () {
	console.log('listening port: 3000')
})