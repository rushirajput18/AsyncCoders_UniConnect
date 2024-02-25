const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const allowedVenues = ['Quad', 'Auditorium', 'Football Ground', 'Cricket Ground', 'Seminar Hall', 'Main Gate'];

const PostSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    venue: { type: String},
    date: { type: Date },
    time: { type: String },
}, {
    timestamps: true,
});

const PostModel = model('Post', PostSchema);
module.exports = PostModel;