const mongoose = require("mongoose");

const PostTagSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    tagId: { type: mongoose.Schema.Types.ObjectId, ref: "Tag", required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PostTag", PostTagSchema);