var mongoose= require("mongoose");
mongoose.connect('mongodb://localhost:27017/adata', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})  

//post- title content
const postSchema= new mongoose.Schema({
	title: String,
	content: String
})
const Post= mongoose.model('Post', postSchema);

//user - email, name
const userSchema= new mongoose.Schema({
	name: String,
	email: String,
	posts: [postSchema]
})
const User= mongoose.model('User', userSchema);





var newUser= new User({
	name: "nan",
	email: "nan@gmail.com",
	

})

// newUser.save(function(err, user){
// 	if(err){
// 		console.log("err")
// 	}else{
// 		console.log(user);
// 	}
// })


var newPost= new Post({
	title: "The Google summer of Code",
	content: "The renouned competetion"
})

newPost.save(function(err, post){
	if(err){
		console.log(err);
	}else{
		console.log(post);
	}
})