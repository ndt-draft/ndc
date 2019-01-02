const mongoose = require('./db/mongoose')
const {Todo} = require('./models/todo')
const {User} = require('./models/user')

const otherTodo = new Todo({
  text: ' 123 abc  '
})

otherTodo.save().then(doc => {
  console.log('Saved todo', JSON.stringify(doc, null, 2))
}, e => {
  console.log(e)
})

const newUser = new User({
  email: 'john@doe.com'
})

newUser.save().then(doc => {
  console.log(JSON.stringify(doc, null, 2))
}, e => {
  console.log(e)
})
