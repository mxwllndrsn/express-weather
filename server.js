// server.js

const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

//setup/////////////////////////////////

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.locals.basedir = path.join(__dirname, './')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

//function//////////////////////////////

app.get('/', function (req, res) {
	res.render('index')
})

app.post('/', function (req, res) {
	res.render('index')
	console.log(req.body.city)
})

app.listen(3000, function () {
	console.log('listening port: 3000')
})