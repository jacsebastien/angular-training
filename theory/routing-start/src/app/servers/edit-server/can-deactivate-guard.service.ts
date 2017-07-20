import { Observable } from 'rxjs/Observable';
import { 
    CanDeactivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot 
} from '@angular/router';

// interface is a sort of contract imported by one other class which force this class to provide some logic
export interface CanComponentDeactivate {
    // method that take no argument and return boolean/Promise/Observable
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

/* 
    CanDeactivateGuard is a class that wrap our own interface to force some components/class to implements canDeactivate method to be sure to easely connect our future component to the canDeactivate method 
    
    canDeactivate method is called by angular router when we try to leave the route
    it takes as argument the compnent which has CanComponentDeactivate interface and so has the canDeactivate method
    argument with "?" are optional
*/
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // return canDeactivate method implemented in our component thx to the interface
        return component.canDeactivate();
    }
}