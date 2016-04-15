var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
	_id: {
		type: String,
		required: true,
		unique: true
	},
	name: {
			type: String,
			required: true,
			unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	admin: Boolean,
	// created_at: Date,
	// updated_at: Date,
	posts: [{
		type: String
	}]
})

userSchema.methods.makeAdmin = function() {
	this.admin = true;
	return this.admin;
};

userSchema.methods.addPostId = function(postID) {
	post_id.push(postID);
	return post_id;
};

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);