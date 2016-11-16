var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(3000, () => {
  console.log('App is hosted at http://localhost:3000')
})
