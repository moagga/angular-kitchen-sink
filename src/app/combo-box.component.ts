import { Component } from "@angular/core";
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


@Component({
    selector: 'multi-select',
    templateUrl: './combo-box.component.html',
    styleUrls: ['./app.component.css']
})
export class MultiSelectComboBox implements ControlValueAccessor{

    options: any;
    selected: any = {};
    message: string = '';
    fn: any;

    selectedOptions: string[] = [];
    displayedOptions: Observable<any[]>;
    
    writeValue(value: string[]){
        if (value !== undefined){
            value.forEach(v => {
                this.options.filter(x => x.code === v).forEach(x => x.state = true);
            })
        }
    }

    registerOnChange(fn){
        this.fn = fn;
    }

    registerOnTouched(fn){

    }

    ngOnInit(){
        console.log('on init');
        
        this.options = [
            {code: 'APP', description: 'Approved', hidden: false, state: false},
            {code: 'CAN', description: 'Cancelled', hidden: false, state: false},
            {code: 'COM', description: 'Complete', hidden: false, state: false},
        ];
        this.displayedOptions = Observable.of(this.options).delay(500);
    }

    checkAll(ev) {
        this.options.filter(x => !x.hidden).
        forEach(x => x.state = ev.target.checked)
    }
    
    isAllChecked() {
        console.log('checking');
        
        return this.options.filter(x => !x.hidden).every(x => x.state);
    }
    
    anyOptionSelected(): boolean {
        return this.numberOfOptionsSelected() > 0;
    }

    numberOfOptionsSelected(): number {
        return this.options.filter(x => x.state && !x.hidden).length;
    }

    onKeyUp(text: string){
        if (text === ""){
            this.showAll();
            return
        }

        let re: RegExp = new RegExp('\\b' + text, 'i');
        this.options
        // .filter((option)=>{
        //     return !re.test(option.description);            
        // })
        .forEach((option)=>{
            option.hidden = !re.test(option.description);
        });
    }

    showAll(){
        this.options.forEach(x => x.hidden = false);
    }

    ngOnChanges(){
        console.log('on changes');
        
    }

    ngDoCheck (){
        console.log('on check');
    }

    ngAfterContentInit(){
        console.log('on after content init');

    }

    ngAfterContentChecked(){
        console.log('on after content checked');
    }

    ngAfterViewInit(){
        console.log('on ngAfterViewInit');
    }
    ngAfterViewChecked(){
        console.log('on ngAfterViewChecked');
    }

    ngOnDestroy(){
        console.log('on destroy');
    }
}