// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    db.collection('Users').find({
        name: 'Faizan'
    }).count().then((count) => {
        console.log(`Users count: ${count}`);        
    }, (err) => {
        console.log('Unable to fetch the documents', err);
    });

    db.collection('Users').find({
        name: 'Faizan'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data from the server', err);
    });

    // db.close();
});