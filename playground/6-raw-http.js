const http = require('http')

const url = `http://api.weatherstack.com/current?access_key=d6dc7aafa861048bc3b58aa23b2bc454&query=45,-75&units=f`

const request = http.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('ERROR: ', error)
})

request.end()
