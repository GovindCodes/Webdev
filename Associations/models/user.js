var mongoose= require("mongoose");

//user - email, name
const userSchema= new mongoose.Schema({
	name: String,
	email: String,
	posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})
module.exports=  mongoose.model('User', userSchema);