console.log('Starting app.js')

const notes = require('./notes.js')

var command = process.argv[2]

if (command === 'add') {
  console.log('Adding note')
} else if (command === 'read') {
  console.log('Reading note')
} else if (command === 'list') {
  console.log('Listing notes')
} else if (command === 'remove') {
  console.log('Removing note')
} else {
  console.log('Command not recognized')
}
