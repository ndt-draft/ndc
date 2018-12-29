var request = require('request')

function geocodeAddress(address) {
  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=<your-api-key>`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Google Server')
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to fetch address')
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        })
      }
    })
  })
}

module.exports.geocodeAddress = geocodeAddress
