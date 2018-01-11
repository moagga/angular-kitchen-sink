import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ViewChildren } from "@angular/core";
import { QueryList } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toArray';


@Component({
    selector: 'additional-param',
    templateUrl: './additional-param.component.html',
    styleUrls: ['./../app.component.css']
})
export class AdditionalParamComponent {

  static buildItem(val: string) {
    return new FormGroup({
      name: new FormControl(val, Validators.required),
      quantity: new FormControl(100)
    })
  }

  @Input()
  public index: number;

  @Input()
  public item: FormGroup;

  @Output()
  public removed: EventEmitter<number> = new EventEmitter<number>();


}