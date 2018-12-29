var request = require('request')

function geocodeAddress(address, callback) {
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC1qyKhCmQUC0p21tTUlO3J5WN9caeHKvY`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google Server')
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to fetch address')
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      })
    }
  })
}

module.exports.geocodeAddress = geocodeAddress
