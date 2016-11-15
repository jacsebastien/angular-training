// Give Component access to the angular core
import { Component, OnInit }    from '@angular/core';
import { Router }       from '@angular/router';

// import the Hero class (model) created in hero.ts file
import { Hero }         from './hero';
// import the service which manage data of heroes
import { HeroService }  from './hero.service';

// associate metadata with the AppComponent
@Component({
  moduleId: module.id,
  // selector will create <my-heroes> tag when route is loaded after <router-outlet> and put the template inside
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})

// control the appearance of the view
export class HeroesComponent implements OnInit {
  // heroes array property type of Hero and not initialized by default
  heroes: Hero[];
  // selectedHero property not initialized by default
  selectedHero: Hero;

  constructor(
    // create an instance of HeroService stored in heroService proprety
    private heroService: HeroService,
    private router: Router,
  ) {}

  getHeroes(): void {
    // use promises to get heroes from the service
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // equivalent to
    // this.heroService.getHeroes().then(
    //   function(heroes) {
    //     this.heroes = heroes
    //   }
    // );
  }
  
  // use the OnInit interface to initialize the component with some data
  ngOnInit(): void {
    // call the getHeroes method from this component
    this.getHeroes();
  }

  // method called when we click on a hero that recieved a Hero type var and return nothing
  onSelect(hero: Hero): void {
    // set selectedHero to the hero the user clicked
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    // go to "/detail/:id"
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


  // public property heroes which has the values of private HEROES array already type of Hero (moved to service)
  // heroes = HEROES;
  // initialized hero property type of Hero 
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
}
