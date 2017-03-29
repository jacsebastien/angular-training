import { Component, OnInit } from '@angular/core';

// services need to be added in app.module.providers too
import { CollectableService } from '../shared/collectable.service';
import { Collectable } from '../shared/collectable.model';


@Component({
    selector: 'app-market',
    templateUrl: './market.component.html'
})
export class MarketComponent implements OnInit {
    collectables: Collectable[] = [];

    onAddToCollection(item: Collectable) {
        this.collectableService.addToCollection(item);
    }

    // at the creation of the component call the CollectableService and stock it in a private property
    constructor(private collectableService: CollectableService) {}

    ngOnInit() {
        // get data from the CollectableService and store them in the collectables array
        this.collectables = this.collectableService.getCollectables();
    }

}