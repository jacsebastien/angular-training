import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';

export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // execute some code on any data passed to observable without consuming it
        return next.handle(req).do(
            event => {
                console.log("Logging Interceptor: ", event);
            }
        );
    }
}
