import { Component, Input, OnInit } from '@angular/core';
// allow use of params in ActivatedRoute (URL)
import { ActivatedRoute, Params }   from '@angular/router';
// allow use of the browser history
import { Location }                 from '@angular/common';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';

// switchMap operator to use with the route parameters Observable
import 'rxjs/add/operator/switchMap';

// metadata
@Component({
    moduleId: module.id,
    // selector name that identifies this component element
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: [ 'hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    // define that hero come from an angular input (value set inside the <my-hero-detail> tag from AppComponent)
    @Input() hero: Hero;

    constructor(
      private heroService: HeroService,
      // ActivatedRoute and Location are services so we need to add there inside the constructor
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
      // use "params" observable to extract the id from the URL
      this.route.params
          //  use switchMap to perform an action with the id contained is "params" observable
          .switchMap((params: Params) =>
            // (+) converts string 'id' from the URL to a number
            this.heroService.getHero(+params['id'])
          )
          // create a new observable with the result of the getHero method
          .subscribe(hero => this.hero = hero)
    }

    // navigate backward one step in the browser history
    goBack(): void {
      this.location.back();
    }

	// call the update method of HeroService which update data on the server
    save(): void {
		// send the updated hero to the method
      	this.heroService.update(this.hero)
		  	// then go back to the previous view
        	.then(() => this.goBack());
    }

}

// ================================================================
// V1
// Hero from a parent component property binding
// import { Component, Input } from '@angular/core';
// import { Hero } from './hero';

// // metadata
// @Component({
//     // selector name that identifies this component element
//     selector: 'my-hero-detail',
//     template: `
//     <!-- Show data of the selected hero only if "hero" property is initialized (we click on one hero) -->
//     <!-- hero proprety is set thx to the <my-hero-detail> tag in AppComponent -->
//     <div *ngIf="hero">
//       <h2>{{hero.name}} details.</h2>
//       <div><label>ID: </label>{{hero.id}}</div>
//       <div>
//         <label>name: </label>
//         <!-- Use ngModel for 2 way data binding -->
//         <input [(ngModel)]="hero.name" placeholder="name">
//       </div>
//     </div>
//     `
// })

// export class HeroDetailComponent {
//     // define that hero come from an angular input (value set inside the <my-hero-detail> tag from AppComponent)
//     @Input() hero: Hero;
// }