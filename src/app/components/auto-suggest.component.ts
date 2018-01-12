import { Component, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'auto-suggest',
    templateUrl: 'auto-suggest.component.html',
    host: {
        '(blur)': 'onTouched()',

    }
})
export class AutoSuggestComponent implements OnInit, ControlValueAccessor {

    @Input()
    url: string;

    onChanged: any = (_:any) => {};
    onTouched: any = (_:any) => {};

    value: any;
    valueDescripton: string;
    options: Observable<any>;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private httpClient: HttpClient
    ){}

    ngOnInit() {
        this.options = this.httpClient.get(this.url);
    }

    writeValue(value: any){
        this.value = value;
        const normalizedValue = '';
        if (value != null ){

        }
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
    }

    registerOnChange(fn: any){
        this.onChanged = fn;
    }

    registerOnTouched(fn: any){
        this.onTouched = fn;
    }

    onSelect(event: TypeaheadMatch) {
        this.value = event.item;
        this.valueDescripton = event.value;

        this.onChanged(event.item);
    }
}