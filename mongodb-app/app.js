const express = require('express')
const bodyParser = require('body-parser')

const {ObjectID} = require('mongodb')
const mongoose = require('./db/mongoose')
const {Todo} = require('./models/todo')
const {User} = require('./models/user')

var app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then(todo => {
    res.send({todo})
  }, e => {
    res.status(400).send()
  })
})

app.get('/todos/:id', (req, res) => {
  var id = req.params.id

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findById(new ObjectID(id))
    .then(todo => {
      if (!todo) {
        return res.status(404).send()
      }

      res.send({todo})
    })
    .catch(e => {
      res.status(400).send()
    })
})

app.listen(3000, () => {
  console.log('Started on port 3000')
})

module.exports = {app}
