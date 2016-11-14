import { Component, Input } from '@angular/core';
import { Hero } from './hero';

// metadata
@Component({
    // selector name that identifies this component element
    selector: 'my-hero-detail',
    template: `
    <!-- Show data of the selected hero only if "hero" property is initialized (we click on one hero) -->
    <!-- hero proprety is set thx to the <my-hero-detail> tag in AppComponent -->
    <div *ngIf="hero">
      <h2>{{hero.name}} details.</h2>
      <div><label>ID: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <!-- Use ngModel for 2 way data binding -->
        <input [(ngModel)]="hero.name" placeholder="name">
      </div> 
    </div>
    `
})

export class HeroDetailComponent {
    // define that hero come from an angular input (value set inside the <my-hero-detail> tag from AppComponent)
    @Input()
    hero: Hero;
}