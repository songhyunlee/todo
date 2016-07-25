var assert = require('chai').assert;
var request = require('request');

describe('Test the REST API', function() {
  //insert test documents.
  before(function(done) {
    var Client = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/example';

    Client.connect(url, function(error, db) {
      if (error) {
        done();
        db.close();
      } else {
        var items = db.collection('items');
        items.insertMany([
          { name: 'Item Three', done: false },
          { name: 'New Item', done: false }
          ], function(error, result) {
            if (error) {
              done();
              db.close();
            } else {
              done();
              db.close();
            }
          }
        )
      }
    })
  })

  describe('CREATE', function() {
    it('fails to create', function(done) {
      request({
        url: 'http://localhost:8080/creating',
        method: 'POST'
      }, function(error, response) {
        assert.equal(response.statusCode, 404);
        done();
      });
    });

    it('creates', function(done) {
      request({
        url: 'http://localhost:8080/',
        method: 'POST'
      }, function(error, response) {
        assert.equal(response.statusCode, 200);
        done();
      })
    })
  });

  describe('READ', function() {
    it('fails to read', function(done) {
      request({
        url: 'http://localhost:8080/reading',
        method: 'GET'
      }, function(error, response) {
        assert.equal(response.statusCode, 404);
        done();
      });
    });

    it('reads', function(done) {
      request({
        url: 'http://localhost:8080/',
        method: 'GET'
      }, function(error, response) {
        assert.equal(response.statusCode, 200);
        done();
      })
    })
  });

  describe('UPDATE', function() {
    it('fails to update', function(done) {
      request({
        url: 'http://localhost:8080/updating',
        method: 'PUT'
      }, function(error, response) {
        assert.equal(response.statusCode, 404);
        done();
      });
    });

    it('updates', function(done) {
      request({
        url: 'http://localhost:8080/',
        method: 'PUT'
      }, function(error, response) {
        assert.equal(response.statusCode, 200);
        done();
      })
    })
  });

  describe('REMOVE', function() {
    it('fails to delete', function(done) {
      request({
        url: 'http://localhost:8080/deleting',
        method: 'DELETE'
      }, function(error, response) {
        assert.equal(response.statusCode, 404);
        done();
      });
    });

    it('reads', function(done) {
      request({
        url: 'http://localhost:8080/',
        method: 'DELETE'
      }, function(error, response) {
        assert.equal(response.statusCode, 200);
        done();
      })
    })
  });
  //remove test documents;
  after(function(done) {
    var Client = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/example';

    Client.connect(url, function(error, db) {
      if (error) {
        done();
        db.close();
      } else {
        var items = db.collection('items');
        items.remove({},
          function(error, result) {
            if (error) {
              done();
              db.close();
            } else {
              done();
              db.close();
            }
          }
        )
      }
    })
  })
})
