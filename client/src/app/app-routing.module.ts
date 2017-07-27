import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollService } from './poll.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PollComponent } from './poll/poll.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component:LoginComponent },
  { path: "create", component:CreateComponent },
  { path: "dashboard", component:DashboardComponent },
    { path: "poll/:question_id", component:PollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
