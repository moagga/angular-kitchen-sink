import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'child-component',
  template: '<span>{{item.name}}</span>  <span>{{item.age}}</span>'
})
export class ChildComponent {

    @Input()
    item: any;

    constructor(){
    }
}
