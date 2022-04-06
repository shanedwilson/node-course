const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Shane D Wilson'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Shane D Wilson'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    name: 'Shane D Wilson',
    message: 'This is a sample help message.'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Stormy',
    location: 'My butt'
  })
})

app.get('/help/*', (req, res) =>{
  res.render('404', {
    title: '404',
    name: 'Shane D Wilson',
    message: 'Help article not found.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Shane D Wilson',
    message: 'Page not found.'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
