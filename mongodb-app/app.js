const { MongoClient, ObjectID } = require('mongodb')

const url = 'mongodb://localhost:27017/'
const dbName = 'TodoApp'

const client = new MongoClient(url, {useNewUrlParser: true})

client.connect((error) => {
  if (error) {
    return console.log('Unable to connect to Mongodb server', error)
  }

  console.log('Connected to Mongodb server')

  const db = client.db(dbName)

  // db.collection('Todos').insertOne({
  //   text: 'Cheer someone',
  //   completed: true
  // }, (err, result) => {
  //   if (err) {
  //     console.log(err)
  //   }
  //   console.log(JSON.stringify(result, undefined, 2))
  // })

  // db.collection('Todos').insertMany([
  //   {
  //     text: 'Finish section 7 with mongodb mongoose',
  //     completed: true
  //   },
  //   {
  //     text: 'Master nodejs',
  //     completed: true
  //   },
  //   {
  //     text: 'Master mongodb, mysql',
  //     completed: false
  //   },
  // ], (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify(result, null, 2))
  // })

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c2cc21861f0c50de0113138')
  // }).toArray((err, docs) => {
  //   if (err) {
  //     return console.log(err)
  //   }
  //   console.log(JSON.stringify(result, null, 2))
  // })

  // db.collection('Todos').find({}).toArray((err, docs) => {
  //   if (err) {
  //     return console.log(err)
  //   }
  //   console.log(JSON.stringify(docs, null, 2))
  // })

  // db.collection('Todos').find({
  //   completed: true
  // }).toArray((err, docs) => {
  //   if (err) {
  //     return console.log(err)
  //   }
  //   console.log(JSON.stringify(docs, null, 2))
  // })

  // db.collection('Todos').updateOne(
  //   {
  //     _id: new ObjectID('5c2cc21861f0c50de0113138')
  //   },
  //   {
  //     $set: {
  //       text: 'Mongodb vs mysql'
  //     }
  //   },
  //   (err, result) => {
  //     if (err) {
  //       console.log(err)
  //     }
  //     console.log(JSON.stringify(result, null, 2))
  //   }
  // )

  // db.collection('Todos').deleteOne({
  //   _id: new ObjectID('5c2cc6acefe005d9630b3036')
  // }, (err, result) => {
  //   if (err) {
  //     console.log(err)
  //   }
  //   console.log(JSON.stringify(result, null, 2))
  // })

  client.close()
})
