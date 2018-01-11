import { Component, Renderer2 } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { Input, Output, EventEmitter } from "@angular/core";
import { ViewChildren } from "@angular/core";
import { QueryList } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toArray';
import { ElementRef } from "@angular/core";
import { ViewChild } from "@angular/core";


@Component({
    selector: 'opt',
    template: `
        <label *ngIf="!hidden">
            <input #chkbox type="checkbox" value="{{code}}"  />
            {{description}}
        </label>
    `,
    styleUrls: ['./app.component.css'],
    host: {
        '(change)': 'onChange($event)'
    }
})
export class OptionComponent {

    @Input()
    value: boolean = false;

    @Input()
    code: string;
    
    @Input()
    description: string;

    @Output()
    change: EventEmitter<boolean> = new EventEmitter();

    hidden: boolean = false;


    @ViewChild('chkbox')
    input: ElementRef;

    constructor(private _renderer: Renderer2){}
    
    ngOnInit(){
        console.log('on init');
    }
    
    ngAfterViewInit(){
        this._renderer.setProperty(this.input.nativeElement, 'checked', this.value);
    }

    onChange($event){
        if ($event.target){
            let sel: boolean = $event.target.checked;
            this.change.emit(sel);
        }
    }
}