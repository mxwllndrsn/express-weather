express weather
==============

#### Simple weather application based on [this tutorial](https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b) by *Brandon Morelli*.

*Requires node, npm, and express - see package.json for dependencies. I'm using **pug** instead of **ejs***.

To use, clone this repository or include *weather-express* as a dependency in your application for the latest version:

```json
"dependencies": {
	"express-weather": "git+ssh://git@github.com:mxwllndrsn/express-weather.git"
}
```

with start script:

```json
"scripts": {
	"start": "node ./node_modules/express-weather/server.js"
}
```

Running on 127.0.0.1:3000 with succesful posts:

```bash
listening port:3000
success
success
...
```

### heroku

A heroku deployment can be seen [here](http://mxwllndrsn-express-weather.herokuapp.com), the default environment port vs local:3000 needs to be set for PaaS deployments:

```javascript
app.set('port', process.env.PORT)

app.listen(app.get('port'), function () {
	console.log(`listening port: ${app.get('port')}`)
})
```
