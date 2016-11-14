import { Injectable }   from '@angular/core';

import { Hero }         from './hero';
import { HEROES }       from './mock-heroes';

// Define a service which may need Angular dependencies thx to @Injectable()
@Injectable()
export class HeroService {
    // method that return an array type of Hero which contain data stored in mock-heroes.ts file
    // we use promises for asynchronous call of our service
    getHeroes(): Promise<Hero[]> {
        // return a promise with a resolve/reject response
        return Promise.resolve(HEROES);
    }

    // method to simulate a slow connection between app and server
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }
}