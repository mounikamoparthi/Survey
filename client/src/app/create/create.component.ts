import { Component, OnInit } from '@angular/core';

import { User } from './../user';
import { Question } from './../question';
import { PollService } from './../poll.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  new_question = new Question();
  current_user: User;

  constructor(private _api:PollService, private _router: Router) { }

  ngOnInit() {
    this._api.getCurrentUser()
    .then((data) => {
      if(data){
        this.current_user = data
      } else {
        this._router.navigate(["/login"])
      }
    })

  }
  onSubmit(){

    this.new_question.options.push(this.new_question.option1)
    this.new_question.options.push(this.new_question.option2)
    this.new_question.options.push(this.new_question.option3)
    this.new_question.options.push(this.new_question.option4)
    for(let i=0; i<4; i++){
      this.new_question.vote.push(0);
    }

  //  if(this.new_question.question!=null)
    this.new_question.user_name = this.current_user.name;
    console.log(this.new_question.options);
    this._api.create(this.new_question)
    .then(() => {
      this._router.navigate(['/dashboard'])})
    .catch((err) => {console.log(err)});

  }


}
