const mongoose = require('mongoose')
const { ObjectID } = require('mongodb')

mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true})

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

// const newTodo = new Todo({
//   text: 'First todo',
//   completed: false
// })

// newTodo.save().then((doc) => {
//   console.log('Saved todo', JSON.stringify(doc, null, 2))
// }, (e) => {
//   console.log('Unable to save todo')
// })

// const otherTodo = new Todo({
//   text: ' 123 abc  '
// })

// otherTodo.save().then(doc => {
//   console.log('Saved todo', JSON.stringify(doc, null, 2))
// }, e => {
//   console.log(e)
// })

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
})

const newUser = new User({
  email: 'john@doe.com'
})

newUser.save().then(doc => {
  console.log(JSON.stringify(doc, null, 2))
}, e => {
  console.log(e)
})
