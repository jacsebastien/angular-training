import { Component, OnInit } from '@angular/core';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';

@Component({
    // module relative loading of templateUrl need module.id
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    // heroes array type of Hero
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        // get the 4 firsts heroes of the list
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 4));
    }
}