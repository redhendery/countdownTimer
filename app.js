var express = require('express');
var path = require('path');

var app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Countdown Timer' })
})

app.listen(3000, () => {
  console.log('App is hosted at http://localhost:3000')
})

module.exports = app;