import { Component } from '@angular/core';
import { PagingInfo } from './pagination.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items:any[];
  pagingInfo: PagingInfo;

  ngOnInit(){
    this.items = [
      {name: 'Mohit', age: 35},
      {name: 'Anu', age: 34}
    ];

    this.pagingInfo = PagingInfo.create(10, 2);

  }

  onChange($event){
    console.log($event);
  }

  onPageChanged(event: any){
    console.log(event.page);
    console.log(event.itemsPerPage);
  }

  goToPage(){
    let pi: PagingInfo = PagingInfo.create(10,2);
    pi.page = 3;
    this.pagingInfo = pi;
  }

}
