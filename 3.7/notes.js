console.log('Starting notes.js')

var addNote = (title, body) => {
  console.log('Adding note', title, body)
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
