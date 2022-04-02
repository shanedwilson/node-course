const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send('<h1>Hello express!</h1>')
})

app.get('/help', (req, res) => {
  res.send({
    name: 'Shane',
    age: 51
  })
})

app.get('/about', (req, res) => {
  res.send('<h1>ABOUT page.</h1>')
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Stormy',
    location: 'My butt'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
