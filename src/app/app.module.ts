import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { MultiSelectComboBox  } from './combo-box.component';
import { SettlementInstructionsFormComponent } from './settlement-instructions/si-form.component';
import { AdditionalParamComponent } from './settlement-instructions/additional-param.component';
import { OptionComponent } from './option.component';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { PaginationComponent } from './pagination.component';
import { ResponseInterceptor } from './response.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
];

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
    TypeaheadModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    {
      provide: PaginationConfig,
      useClass: AppPaginationConfig
    },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
