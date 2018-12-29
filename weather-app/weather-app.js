var request = require('request')
var yargs = require('yargs')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

const key = 'AIzaSyC1qyKhCmQUC0p21tTUlO3J5WN9caeHKvY'

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${argv.address}&key=${key}`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Google Server')
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to fetch address')
  } else if (body.status === 'OK') {
    var lat = body.results[0].geometry.location.lat
    var lng = body.results[0].geometry.location.lng

    console.log(body.results[0].formatted_address)

    request({
      url: `https://api.darksky.net/forecast/c6f813641f577f4c8f678d5c6d4fdf5d/${lat},${lng}?units=si`,
      json: true
    }, (error, response, body) => {
      console.log(`It's currently ${body.currently.temperature}. It feels like ${body.currently.apparentTemperature}`)
    })
  }
})
