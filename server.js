// server.js

const express = require('express')
const request = require('request')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

const apiKey = '8c041342c67e05efc2b1ead5b256ada4'

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
	let city = req.body.city;
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

	request(url, function(err, response, body){
		if(err){
			res.render('index', {weather:null, error:'Please check city name and try again.'});
		} else {
			let weather = JSON.parse(body);
			if(weather.main == undefined){
				res.render('index', {weather:null, error:'An error occurred, please try again.'});
			} else {
				let weatherText = `It's currently ${weather.main.temp} degrees fahrenheit and ${weather.weather[0].description} in ${weather.name}, with humidity at ${weather.main.humidity}%.`;
				res.render('index', {weather: weatherText, error: null});
				console.log('success')
			}
		}
	})
})

app.listen(3000, function () {
	console.log('listening port: 3000')
})