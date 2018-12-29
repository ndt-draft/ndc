var request = require('request')

function getWeather(lat, lng, callback) {
  request({
    url: `https://api.darksky.net/forecast/c6f813641f577f4c8f678d5c6d4fdf5d/${lat},${lng}?units=si`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    } else {
      callback('Unable to fetch weather.')
    }
  })
}

module.exports.getWeather = getWeather
