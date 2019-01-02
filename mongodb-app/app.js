const mongoose = require('mongoose')
const { ObjectID } = require('mongodb')

mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true})

const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
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

const otherTodo = new Todo({
  text: 'Other todo',
  completed: 'false',
  completedAt: '123'
})

otherTodo.save().then(doc => {
  console.log('Saved todo', doc)
}, e => {
  console.log(e)
})
