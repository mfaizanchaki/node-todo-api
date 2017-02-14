// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Some text here',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Faizan',
    //     age: '20',
    //     location: 'Lahore'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to connect to MongoDB servers', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
});