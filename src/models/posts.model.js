import mongoose from "mongoose"

const postSchema = new mongoose.Schema({ //recibirá un objeto
    title: {
        type: String, 
        required: false,
        minLength: 3,
        maxLength: 500,
        trim: true 
    },
    description: {
        type: String, 
        required: false,
        minLength: 5,
        trim: true
    },
    comments:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] ,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
})

const Post = mongoose.model('Post', postSchema)
export {Post}



/* const commentSchema = new mongoose.Schema({
    text: String,
    username: String
})

const Comment = mongoose.model('comment', commentSchema)
export {Comment} */