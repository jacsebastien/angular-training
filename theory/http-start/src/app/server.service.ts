import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";

import { Observable } from 'rxjs/Observable';
// allow use of observable operators
import 'rxjs/RX';

@Injectable()
export class ServerService {

    constructor(private http: Http) { }

    storeServers(servers: any[]): Observable<any> {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        // create an observable which will send data ONLY if a component subscribes to it
        // return this.http.post('https://udemy-ng-http-4bbe4.firebaseio.com/data.json', 
        //     servers, 
        //     { headers: headers }
        // );
        return this.http.put('https://udemy-ng-http-4bbe4.firebaseio.com/data.json', 
            servers, 
            { headers: headers }
        );
    }

    getServers(): Observable<any> {
        // map() take data from the .get(), allow to transforme it and return it, wrapped into another observable
        return this.http.get('https://udemy-ng-http-4bbe4.firebaseio.com/data.json')
            .map((response: Response) => {
                const data = response.json();
                for(let server of data) {
                    server.name = 'FETCHED_' + server.name;
                }
                // return simple object which will be wrapped into a new observable
                return data;
            })
            .catch(
                (error: Response) => {
                    // console.log(error);

                    // create an observable to return the error
                    return Observable.throw('Something went wrong');
                }
            );
    }

    getAppName() {
        return this.http.get('https://udemy-ng-http-4bbe4.firebaseio.com/appName.json')
        .map((response: Response) => {
            return response.json();
        });
    }

}
