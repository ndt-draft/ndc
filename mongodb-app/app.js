const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to Mongodb server')
  }

  const db = client.db('TodoApp')

  db.collection('Todos').insertOne({
    text: 'Finish section 7 with mongodb mongoose',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err)
    }

    console.log(JSON.stringify(result, null, 2))
  })

  client.close()
})
