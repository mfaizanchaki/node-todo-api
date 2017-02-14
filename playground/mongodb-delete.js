// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: "Study AI"}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: "Study AI"}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // challenge

    // duplicate documents - delete all
    // db.collection('Users').deleteMany({name: "Faizan"}).then((result) => {
    //     console.log(result);
    // });

    // delete one - by ID
    db.collection('Users').deleteOne({
        _id: new ObjectID("58a2f0a7e6dea47aed108951")
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});