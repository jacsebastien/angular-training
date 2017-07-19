import { ActivatedRouteSnapshot, 
    CanActivate, 
    Router, 
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

// allow to inject services inside this one
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    // import service which fake authentication system
    constructor(private authService: AuthService,
                private router: Router) {}

    // canActivate take the ActivatedRouteSnapshot and RouterStateSnapshot as argument and return a boolean
    // it can work asynchronousely with observable and promise or synchronousely with simple boolean
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // return a promise whith a boolean
        return this.authService.isAuthenticated()
        .then(
            // recieve the returnd value of isAuthenticated method which is a boolean
            (authenticated: boolean) => {
                if(authenticated) {
                    return true;
                } else {
                    // if not authenticated just go to index
                    this.router.navigate(['/']);
                    // prevent the original navigation from happening anyways
                    return false;
                }
            }
        );
    }

    // used to check if child of the selected route ca be visited or not and not the route itselfe
    canActivateChild(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }
}