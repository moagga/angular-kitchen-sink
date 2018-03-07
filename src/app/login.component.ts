import { Component, TemplateRef } from '@angular/core';
import { PagingInfo } from './pagination.component';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'login',
  template: `
    <div>
        Login Here.
        <button (click)="onLogin()">Login</button>
    </div>
  `
})
export class LoginComponent {

  constructor(private modalService: BsModalService, private router: Router){}
  
  ngOnInit(){
  }

  onLogin(){
      window.location.href = '/';
  }
}
