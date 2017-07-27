import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { User } from './../user';
import { PollService } from './../poll.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  new_user = new User;
  constructor(private _api: PollService, private router: Router) { }

  ngOnInit() {
  }
    login(){
    console.log(this.new_user)
    this._api.login(this.new_user)
      .then(() => {
        console.log("jkj")
        this.router.navigate(["/dashboard"]);
      })
      .catch(err => console.log(err))

    this.new_user = new User
  }

}
