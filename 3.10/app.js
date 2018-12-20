console.log('Starting app.js')

const yargs = require('yargs')
const notes = require('./notes.js')

var command = process.argv[2]

console.log(process.argv)
var argv = yargs.argv
console.log(argv)

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Note created')
    console.log('---')
    console.log('Title: ' + note.title)
    console.log('Body: ' + note.body)
  } else {
    console.log('Note title taken')
  }
} else if (command === 'read') {
  notes.getNote(argv.title)
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'remove') {
  notes.removeNote(argv.title)
} else {
  console.log('Command not recognized')
}
