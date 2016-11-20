var express = require('express');
var path = require('path');

var app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Countdown Timer' })
})

// app.listen(5000, () => {
//   console.log('App is hosted at http://localhost:5000')
// })

module.exports = app;
