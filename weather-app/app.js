const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const locationInput = process.argv[2]

if (locationInput !== undefined) {
  geocode(locationInput, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error)
    }
  
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
  
      console.log(location)
      console.log(forecastData)
    })
  }) 
} else {
  console.log('You must provide a location.')
}
