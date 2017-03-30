import { Collectable } from './collectable.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CollectableService {
    // create an array of objects type of Collectable based on the collectable.model.ts
    private collectables: Collectable[] = [
        {
            description: 'Build your city',
            type: 'Management'
        },
        {
            description: 'Customize your car and win races',
            type: 'Race'
        },
        {
            description: 'Create your character, do some quests and earn xp and gold',
            type: 'MMORPG'
        }
    ];

    // Collection of items that the user will choose
    private collection: Collectable[] = [];

    // public function to get content of private properties
    getCollectables() {
        return this.collectables;
    }

    getCollection() {
        return this.collection;
    }

    addToCollection(item: Collectable) {
        // if he is already in the collection, just return and do nothing
        if(this.collection.indexOf(item) === -1){
            this.collection.push(item);
        }
    }

    removeFromCollection(item: Collectable) {
        // remove 1 item from the id of the item passed to the method
        this.collection.splice(this.collection.indexOf(item), 1);
    }

    constructor() {}
    
}

