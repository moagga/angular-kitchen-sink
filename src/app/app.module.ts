import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { MultiSelectComboBox  } from './combo-box.component';
import { SettlementInstructionsFormComponent } from './settlement-instructions/si-form.component';
import { AdditionalParamComponent } from './settlement-instructions/additional-param.component';
import { OptionComponent } from './option.component';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { PaginationComponent } from './pagination.component';

@Injectable()
export class AppPaginationConfig {
  pager: any = {
    itemsPerPage: 15,
    previousText: 'P',
    nextText: 'N',
    pageBtnClass: '',
    align: true
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MultiSelectComboBox,
    SettlementInstructionsFormComponent,
    AdditionalParamComponent,
    OptionComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PaginationModule,
    TypeaheadModule.forRoot()
  ],
  providers: [
    {
      provide: PaginationConfig,
      useClass: AppPaginationConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
