import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from './shopping-list.service';
import * as fromShoppingList from './store/shopping-list.reducers';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    // ingredients: Ingredient[];
    // ingredients is an observable which recieve an object containing the ingredients array
    shoppingListState: Observable<{ingredients: Ingredient[]}>;
    // private subscription: Subscription;

    constructor(
        // private slService: ShoppingListService,
        // store is a generic type and need to know the type of data that we need to retrieve
        // need to fit to the state defined in the module file
        // private store: Store<{shoppingList: {ingredients: Ingredient[]}}>
        private store: Store<fromShoppingList.AppState>
    ) { }

    ngOnInit() {
        // select the shoppingList part of the store states and get it's actual state
        this.shoppingListState = this.store.select('shoppingList');

        // old version with subscription
        // this.ingredients = this.slService.getIngredients();
        // subscribe to the subject (Observable and observer) of the service to affect edited array to this ingredients array
        // this.subscription = this.slService.ingredientsChanged
        //     .subscribe((ingredients: Ingredient[]) => {
        //         this.ingredients = ingredients;
        //     });
    }

    onEditItem(index: number) {
        // this.slService.startedEditing.next(index);
        this.store.dispatch(new ShoppingListActions.StartEdit(index));
    }

    ngOnDestroy() {
        // unsubscribe to observable to prevent memory leaks
        // this.subscription.unsubscribe();
    }
}
