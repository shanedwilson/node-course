const request = require('request')

const geocode = (address, callback) => {
  const encodedAddress = encodeURIComponent(address)
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=pk.eyJ1Ijoic2hhbmVkd2lsc29uIiwiYSI6ImNsMTdnMG00ejFiemIzb3YwZXhzdDhxNXAifQ.mT4tFUcQExnftNpNCOArwg&limit=1`

  request({url, json: true}, (error, { body }) => {
    const { center, place_name } = body.features[0]
    if (error) {
      callback('Unable to connect to location services.', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find a location. Try another search.', undefined)
    } else {
      callback(undefined, {
        latitude: center[1],
        longitude: center[0],
        location: place_name
      })
    }
  })
}

module.exports = geocode
