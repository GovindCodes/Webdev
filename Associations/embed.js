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





// var newUser= new User({
// 	name: "nan",
// 	email: "nan@gmail.com",
// })

// newUser.posts.push({
// 	title: "how to crack iit",
// 	content: "you can't dude"
// })

// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(user);
// 	}
// })
// newUser.save(function(err, user){
// 	if(err){
// 		console.log("err")
// 	}else{
// 		console.log(user);
// 	}
// })


// var newPost= new Post({
// 	title: "The Google summer of Code",
// 	content: "The renouned competetion"
// })

// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(post);
// 	}
// })
// User.find({name: "nan"}, function(err, user){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(user);
// 	}
// })
User.findOne({name: "nan"}, function(err, user){
	if(err){
		console.log(err);
	}else{
		user.posts.push({
			title: "Faang placement",
			content: "while(life) DSA"
		});
		user.save(
		function(err, user){
			if(err){
				console.log(err);
			}else{
				console.log(user);
			}
		})
	}
})

// User.findOne({name: "nan"}, function(err, user){
//     if(err){
//         // console.log(err);
//     } else {
//         user.posts.push({
//             title: "3 Things I really hate",
//             content: "Voldemort.  Voldemort. Voldemort"
//         });
//         user.save(function(err, user){
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(user);
//             }
//         });
//     }
// });