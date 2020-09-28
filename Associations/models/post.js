const { model } = require("mongoose");

var mongoose= require("mongoose");

//post- title content
const postSchema= new mongoose.Schema({
	title: String,
	content: String
})
module.exports = mongoose.model('Post', postSchema);