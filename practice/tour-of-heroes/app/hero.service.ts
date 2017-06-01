import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

// allow use of toPromise with Observables
import 'rxjs/add/operator/toPromise';

import { Hero }         from './hero';
// import { HEROES }       from './mock-heroes';

// Define a service which may need Angular dependencies thx to @Injectable()
@Injectable()
export class HeroService {
    // URL to the web api
    private heroesUrl = 'app/heroes';

    constructor(private http: Http) {}

    // define the body content type
    private headers = new Headers({'Content-Type': 'application/json'});

    // Manage Promises errors
    // get an error of any type and return a Promise response of any type
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    // method that return an array type of Hero whith data of stored Heroes thx to promises
    getHeroes(): Promise<Hero[]> {
        // return a promise with a resolve/reject response
        // return Promise.resolve(HEROES);
        // convert result from http.get to a promise
        return this.http.get(this.heroesUrl).toPromise()
                // return the json data array as a Hero object which is the resolved Promise value
                .then(response => response.json().data as Hero[])
                // if we have errors we handle them
                .catch(this.handleError);
    }

    // method to simulate a slow connection between app and server
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }

    // getHero get a "id" property type of number and return an object type of Hero with promies
    getHero(id: number): Promise<Hero> {
        // use the getHeroes function to get all Heroes
        return this.getHeroes()
            // then return the hero who the id match with the one sent to the method
            .then(heroes => heroes.find(hero => hero.id === id));
            // same than
            // .then((heroes) => {
            //     return heroes.find((hero) => {
            //         return hero.id === id
            //     })
            // });
    }

    update(hero: Hero): Promise<Hero> {
        // ex url: "app/heroes/5"
        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            // PUT method to the defined url with hero data type of String
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            // post to "app/heroes"
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}