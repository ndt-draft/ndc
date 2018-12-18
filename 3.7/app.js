console.log('Starting app.js')

const yargs = require('yargs')
const notes = require('./notes.js')

var command = process.argv[2]

console.log(process.argv)
var argv = yargs.argv
console.log(argv)

if (command === 'add') {
  notes.addNote(argv.title, argv.body)
} else if (command === 'read') {
  notes.getNote(argv.title)
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'remove') {
  notes.removeNote(argv.title)
} else {
  console.log('Command not recognized')
}
