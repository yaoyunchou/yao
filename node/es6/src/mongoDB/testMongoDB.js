/**
 * Created by yaoyc on 2017/2/27.
 */
	import {MongoClient} from 'mongodb';
	import assert from 'assert';
	import { mongodbConfig } from '../config';


	var url = mongodbConfig.url;
	var insertDocuments = function(db, callback) {
		// Get the documents collection
		let collection = db.collection('editeTpl');
		// Insert some documents
		collection.insertMany([
			{a : 1}, {a : 2}, {a : 3}
		], function(err, result) {
			assert.equal(err, null);
			assert.equal(3, result.result.n);
			assert.equal(3, result.ops.length);
			console.log("Inserted 3 documents into the collection");
			callback(result);
		});
	};
	
	MongoClient.connect(url,function (err,db){
		assert.equal(null,err);
		console.log("Connected successfully to server");
	});
	function create(){
		conect
	}


