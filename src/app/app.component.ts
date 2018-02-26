import { Component, TemplateRef } from '@angular/core';
import { PagingInfo } from './pagination.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;

  constructor(private http: HttpClient, private modalService: BsModalService){}
  
  ngOnInit(){
    let url = 'http://localhost:3000/';
    this.http.get(url).subscribe((resp: any) => {
      console.log(resp);
      this.title = resp.items[0];
    });
  }


}
