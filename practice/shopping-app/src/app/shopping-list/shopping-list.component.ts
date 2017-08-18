import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private subscription: Subscription;

    constructor(private slService: ShoppingListService) { }

    ngOnInit() {
        this.ingredients = this.slService.getIngredients();
        // subscribe to the subject (Observable and observer) of the service to affect edited array to this ingredients array
        this.subscription = this.slService.ingredientsChanged
            .subscribe((ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            });
    }

    onEditItem(index: number) {
        this.slService.startedEditing.next(index);
    }

    ngOnDestroy() {
        // unsubscribe to observable to prevent memory leaks
        this.subscription.unsubscribe();
    }
}
