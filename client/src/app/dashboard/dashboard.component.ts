import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Question } from './../question';
import { PollService } from './../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
current_user: User;
list_questions: Array<Question>;
searchStr: string = '';
user_data: User;

  constructor(private _api: PollService, private _router: Router) { }

  ngOnInit() {
    this._api.getCurrentUser()
    .then((data) => {
      if(data){
        this.current_user = data
        this.get_all_questions();
      } else {
        this._router.navigate(["/login"])
      }
    })
  }

get_all_questions(){
  this._api.listQuestions()
    .then((data) => {
      if(data){
        this.list_questions = data;
      }
    })
    .catch((err) => {console.log(err)});
  }


 getName(user){
      this._api.getUserName(user)
      .then((data) => {
        if(data){
          this.user_data = data;
        }
      })
 }
  Delete(question){
    let del = confirm(`Are you sure you want to remove`);
      if(del){
        this._api.destroy_question(question)
        .then(() => {
          this.get_all_questions();
         })
          .catch((err) => {console.log(err)});
      }
  }
}

