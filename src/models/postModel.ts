import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  author: String,
  age: { type: Date, default: Date.now },
  title: String,
  body: String,
  comments: [{ body: String, date: Date }],
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
