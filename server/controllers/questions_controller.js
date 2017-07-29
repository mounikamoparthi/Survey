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
     

    getQuestions:(req,res) =>{
    console.log("in controller getQuestion",req.body.id)
        Question.findOne({_id: req.body.id})
        .then(question => { console.log("hey",question);res.json(question);})
				.catch(err => {res.status(500).json(err); })
    },
    
    addVotes:(req,res) =>{
        Question.findOne({_id:req.body.id}) //req.body.id key froam api
         .then(question => {
            
        for(let i=0; i<question.options.length;i++){
                if(question.options[i] == req.body.num){
                    question.vote[i] = question.vote[i]+1;
                }
            }
            question.markModified('vote');
            console.log(question.vote)
            question.save()
            res.json(true);
            })
				.catch(err => {res.status(501).json(err); })
        },
    delquest: (req,res) => {
        Question.findByIdAndRemove(req.body._id)
        .then(() => { res.json(true);})
        .catch((err) => {res.status(503).json(err);})
    },
}