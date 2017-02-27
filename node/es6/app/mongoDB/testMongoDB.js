'use strict';

var _mongodb = require('mongodb');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by yaoyc on 2017/2/27.
 */
var url = 'mongodb://localhost:27017/yao';
var insertDocuments = function insertDocuments(db, callback) {
	// Get the documents collection
	var collection = db.collection('editeTpl');
	// Insert some documents
	collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], function (err, result) {
		_assert2.default.equal(err, null);
		_assert2.default.equal(3, result.result.n);
		_assert2.default.equal(3, result.ops.length);
		console.log("Inserted 3 documents into the collection");
		callback(result);
	});
};

_mongodb.MongoClient.connect(url, function (err, db) {
	_assert2.default.equal(null, err);
	console.log("Connected successfully to server");
	insertDocuments(db, function (req) {
		console.log(req);
		db.close();
	});
});