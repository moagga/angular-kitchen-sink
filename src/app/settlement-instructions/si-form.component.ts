import { OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { AdditionalParamComponent } from "./additional-param.component";
import { Component } from "@angular/core";
import { FormArray } from "@angular/forms";

@Component({
    selector: 'si-form',
    templateUrl: './si-form.component.html'
})
export class SettlementInstructionsFormComponent implements OnInit {

    myForm: FormGroup;

    constructor(
      private fb: FormBuilder
    ) {}
  
    ngOnInit() {
      this.myForm = this.fb.group({
        items: this.fb.array([
            AdditionalParamComponent.buildItem('aaa'),
            AdditionalParamComponent.buildItem('')
        ])
      });
    }

    addItem() {
        let arr: FormArray = this.myForm.get('items') as FormArray;
        arr.push(AdditionalParamComponent.buildItem(''))
    }

    onSubmit(){
        console.log(this.myForm);
        
    }
}
  