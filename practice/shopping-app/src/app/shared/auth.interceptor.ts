import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    // return an observable which is type of any HttpEvent
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Intercepted !", req);

        // copy incomming request to be sure to not alter the original request
        // const copiedReq = req.clone({headers: req.headers.set('', '')});
        // copy request and change params to automatically add auth token
        const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});

        return next.handle(copiedReq);
    }
}
