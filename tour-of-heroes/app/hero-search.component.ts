import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { HeroSearchService }    from './hero-search.service';
import { Hero }                 from './hero';

@Component({
  moduleId: module.id,
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: [ 'hero-search.component.css' ],
  // HeroSearchService in component providers instead of AppModule because we need it only in this component
  providers: [ HeroSearchService ]
})

export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;

  // searchTerms produces an Observable of strings, the filter criteria for the name search
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

  // Each call to search() puts a new string into this subject's observable stream by calling next
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // turn the stream of search terms into a stream of Hero arrays 
    // and assign the result to the heroes property
    this.heroes = this.searchTerms
      // wait for 300ms pause in events
      .debounceTime(300)        
      // ensures that we only send a request if the filter text changed
      .distinctUntilChanged()   
      // cancels and discards previous search observables & switch to new observable each time
      .switchMap(term => term   
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Hero[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
