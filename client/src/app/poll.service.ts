import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import { User } from './user';
import { Question } from './question';
import "rxjs"

@Injectable()
export class PollService {

  constructor(private http: Http) { }
    login(user: User){
      return this.http.post("/login", user)
      .map(data => data.json()).toPromise()
    }
    create(question) {
      return this.http.post('/create', question)
      .map(data => data.json())
      .toPromise()
  }
  getCurrentUser() {
    return this.http.get('/get_logged_in_user')
    .map(data => data.json()).toPromise();
  }
  listQuestions(){
    return this.http.get('/list_allQuestions')
    .map(data => data.json()).toPromise();
  }

 getQuestion(question_id: String){
     return this.http.post('/getQuestions',{id: question_id})
    .map(data => data.json()).toPromise();
  }
votes(option:String,question:String)
{
   return this.http.post('/addVotes',{id: question, num:option})
    .map(data => data.json()).toPromise();
}

  destroy_question(question){
     return this.http.post('/destroyquestion', question)
    .map(data => data.json()).toPromise();
  }
  }


