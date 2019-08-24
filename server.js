// server.js

const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', function (req, res) {
	res.send('Hello, World.')
})

app.listen(3000, function () {
	console.log('listening port: 3000')
})