// Give Component access to the angular core
import { Component }  from '@angular/core';
// import the Hero class created in hero.ts file
import { Hero } from './hero';


// HEROES array which is type of Hero
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

// associate metadata with the AppComponent
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <!-- * is needed and indicates that <li> and children are a master template -->
      <!-- Use proprety binding to add "selected" css class if hero === selectedHero -->
      <!-- call onSelect() method when we click on the <li> and pass the hero to the function -->
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <!-- my-hero-detail tag bind data with the HeroDetailComponent and pass the selectedHero value to the hero property -->
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

// control the appearance of the view
export class AppComponent {
  title = 'Tour of Heroes';
  // public property heroes which has the values of private HEROES array already type of Hero
  heroes = HEROES;

  // selectedHero property not initialized by default
  selectedHero: Hero;

  // method called when we click on a hero that recieved a Hero type var and return nothing
  onSelect(hero: Hero): void {
    // set selectedHero to the hero the user clicked
    this.selectedHero = hero;
  }

  // initialized hero property type of Hero 
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
}
