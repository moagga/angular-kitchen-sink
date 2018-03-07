import { Component, TemplateRef } from '@angular/core';
import { PagingInfo } from './pagination.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  loggedIn: boolean = false;

  constructor(private router: Router){}
  
  ngOnInit(){
    if (!this.loggedIn){
      this.router.navigate(['login']);
      Observable.of(true).delay(500).subscribe(data=> this.loggedIn = data);
    } else {
      this.title = 'Hello World';
    }
  }

  onLogonStatusChange(loggedIn: boolean){
    if (!loggedIn){
      //show warning
      if (environment.production){
        //show warning
      }
    }
  }

  

}
