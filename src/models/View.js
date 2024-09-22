const mongoose = require("mongoose");

const ViewSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Tag", required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("View", ViewSchema);