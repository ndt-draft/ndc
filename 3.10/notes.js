const fs = require('fs')

console.log('Starting notes.js')

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
  let notes = fetchNotes()

  var note = {
    title,
    body
  }

  var duplicateNotes = notes.filter(note => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

var getNote = (title) => {
  console.log('Reading note', title)
}

var getAll = () => {
  console.log('Getting all notes')
}

var removeNote = (title) => {
  console.log('Removing note', title)
}

module.exports = {
  addNote,
  getNote,
  getAll,
  removeNote
}
