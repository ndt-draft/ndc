var yargs = require('yargs')
var geocode = require('./geocode')
var weather = require('./weather')

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

geocode.geocodeAddress(argv.address, (errorMessage, result) => {
  if (errorMessage) {
    console.log(errorMessage)
  } else {
    console.log(JSON.stringify(result, null, 2))

    weather.getWeather(result.lat, result.lng, (errorMessage, result) => {
      if (errorMessage) {
        console.log(errorMessage)
      } else {
        console.log(`It's currently ${result.temperature}. It feels like ${result.apparentTemperature}`)
      }
    })
  }
})