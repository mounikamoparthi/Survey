import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Question } from './../question';
import { PollService } from './../poll.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  pageQuestionId: String;
  currentUserQuestions: Array<Question>;
  current_question = Question
  question: Question;

  constructor(private _api: PollService, private _route: ActivatedRoute,  private _router: Router) {
     this._route.params.subscribe((param)=>{
      console.log("TaskDetailsComponent loaded and url id given is: ", param.question_id);
      this.pageQuestionId = param.question_id;
    })

   }

  ngOnInit() {
    this._api.getQuestion(this.pageQuestionId)
      .then((data) => {
        if(data){
          this.current_question = data;
          console.log("data", data)
        }
  })
  .catch(err => console.log(err))

  }
      }




