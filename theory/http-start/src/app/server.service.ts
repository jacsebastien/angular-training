import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {

    constructor(private http: Http) { }

    storeServers(servers: any[]): Observable<any> {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        // create an observable which will send data ONLY if a component subscribes to it
        return this.http.post('https://udemy-ng-http-4bbe4.firebaseio.com/data.json', 
            servers, 
            {
                headers: headers
            }
        );
    }

    getServers(): Observable<any> {
        return this.http.get('https://udemy-ng-http-4bbe4.firebaseio.com/data.json');
    }

}
