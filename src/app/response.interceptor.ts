import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import 'rxjs/add/operator/do';


@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('intercept');
    
    return next.handle(req)
    .filter(evt => {
        console.log(evt);
        return evt instanceof HttpResponse
    })
    .map((resp: HttpResponse<any>)=> {
        let response = resp.clone({
            body: resp.body.data
        });
        return response;
    });
  }
}