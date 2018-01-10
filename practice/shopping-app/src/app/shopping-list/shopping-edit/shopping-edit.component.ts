// import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild
} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    @ViewChild('f') slForm: NgForm;

    private subscription: Subscription;
    editMode = false;

    editedItemIndex: number;
    editedItem: Ingredient;

    constructor(
        private slService: ShoppingListService,
        private store: Store<{shoppingList: {ingredients: Ingredient[]}}>
    ) { }

    ngOnInit() {
        // subscribe to startedEditing to know the index of the edited element
        this.subscription = this.slService.startedEditing
        .subscribe(
            (index: number) => {
                this.editedItemIndex = index;
                // if we get an index, we are in edit mode
                this.editMode = true;
                this.editedItem = this.slService.getIngredient(index);

                this.slForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                });
            }
        );
    }

    onSubmit(form: NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);

        if(this.editMode) {
            // this.slService.updateIngredient(this.editedItemIndex, newIngredient);
            this.store.dispatch(new ShoppingListActions.UpdateIngredient({
                index: this.editedItemIndex,
                ingredient: newIngredient
            }));
        } else {
            // this.slService.addIngredient(newIngredient);
            // dispatch new action in the store using the AddIngredient custom action created
            // could be used inside the service instead of direc call from component
            this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient))
        }

        this.onClearForm();
    }

    onClearForm() {
        this.slForm.reset();
        this.editMode = false;
    }

    onDelete() {
        // this.slService.deleteIngredient(this.editedItemIndex);
        this.store.dispatch(new ShoppingListActions.DeleteIngredient(this.editedItemIndex));
        this.onClearForm();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
