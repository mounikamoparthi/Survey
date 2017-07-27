const path = require("path")
const users = require("./../controllers/users_controller.js") 
const questions = require("./../controllers/questions_controller.js") 
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Question = mongoose.model('Question');

module.exports = (app) =>{
    app.post('/login', users.login)
    app.get("/logout", users.logout)
    app.post("/create", questions.create)
    app.get('/get_logged_in_user', users.currentUser)
    app.post("/destroyquestion", questions.delquest)
    app.get("/list_allQuestions", questions.showAll)
    app.get('/getCurrentQuestions', questions.currentQuestions);
    app.post('/name', users.username)
    app.post('/getQuestions', questions.getQuestions)
   
    

    app.get("*", (req,res) =>{
        res.sendFile(path.resolve("./client/dist/index.html"))
    })
}