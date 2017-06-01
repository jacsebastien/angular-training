import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs';

import { Hero }     from './hero';

@Injectable()
export class HeroSearchService {
    constructor(private http: Http) {}

    // with observables we can start one request, then cancel it, and make a different request before 
    // the server has responded to the first request
    search(term: string): Observable<Hero[]> {
        return this.http
                // get to the server thx to a query string
                .get(`app/heroes/?name=${term}`)
                // return observable istead of promise
                .map((res: Response) => res.json().data as Hero[]);
    }
}
