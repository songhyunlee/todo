var Client = require('mongodb').MongoClient;
var express = require('express');
var app = express();

var url = 'mongodb://localhost:27017/items';

app.post('/', function(req, res) {

  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var items = db.collection('items');
      items
      .insert(
        {name:'New Item', done: false},
        function(error, result) {
        console.log("Created items");
        res.send();
        db.close();
      })
    }
  })
})

app.get('/', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var items = db.collection('items');
      items
        .find({name: 'Item One'}).toArray(function(error, docs) {
          if(error) {
            console.log('error');
          } else {
            console.log('Found');
            console.log(docs);
            res.send();
            db.close();
          }
        })
    }
  })
})

app.put('/', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var items = db.collection('items');
      items
        .update({name: 'Item Two'},
        {$set: {name: 'Must Complete'}},
        function(error, result) {
          console.log(result);
          res.send();
          db.close();
        })
    }
  })
})

app.delete('/', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var items = db.collection('items');
      items
      .deleteOne({name: 'Item One'}, function(error, result) {
        console.log(result);
        console.log('Deleted.');
        res.send();
        db.close();
        })
    }
  })
})

app.listen(8080);
