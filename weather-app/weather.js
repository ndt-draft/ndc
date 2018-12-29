var request = require('request')

function getWeather(lat, lng) {
  return new Promise((resolve, reject) => {
    request({
      url: `https://api.darksky.net/forecast/<your-api-key>/${lat},${lng}?units=si`,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve({
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        })
      } else {
        reject('Unable to fetch weather.')
      }
    })
  })
}

module.exports.getWeather = getWeather
