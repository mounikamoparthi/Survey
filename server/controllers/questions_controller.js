const mongoose = require('mongoose');
const Question = mongoose.model('Question');
mongoose.Promise = global.Promise;

module.exports = {
    create: (req,res,next) => {
        let p = new Question(req.body);
        p.save()
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
},
    showAll:(req,res) =>{
        Question.find({})
        .then(question => {res.json(question);})
				.catch(err => {res.status(501).json(err); })
    },
     currentQuestions:(req,res) =>{
        Question.find({user_id: req.session.user_id})
        .then(question => {res.json(question);})
				.catch(err => {res.status(500).json(err); })
    },

    getQuestions:(req,res) =>{
    console.log("in controller getQuestion",req.body.id)
        Question.findOne({_id: req.body.id})
        .then(question => { console.log("hey",question);res.json(question);})
				.catch(err => {res.status(500).json(err); })
    },
    
    delquest: (req,res) => {
        Question.findByIdAndRemove(req.body._id)
        .then(() => { res.json(true);})
        .catch((err) => {res.status(503).json(err);})
    },
}