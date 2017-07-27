const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    user_id: {type: String},
    question: {type: String},
    options: Array
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);