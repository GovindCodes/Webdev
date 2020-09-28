var mongoose= require("mongoose");
mongoose.connect('mongodb://localhost:27017/associate', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})  

var Post= require("./models/post");

var User= require("./models/user");


// User.create({
//     name: "Bob",
//     email: "bob@gmail.com"
// }, function(err, user){
//     console.log(user);
// })

Post.create({
    title: "how to cook burger",
    content: "better go to restraunt"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        foundUser.posts.push(post);
        foundUser.save(function(err, user){
            console.log(user);
        })
    })
});

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     console.log(user);
// })

