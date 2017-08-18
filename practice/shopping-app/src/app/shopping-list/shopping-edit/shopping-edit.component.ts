// import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import {
    Component,
    OnInit,
    OnDestroy
} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    private editMode: boolean = false;

    editedItemIndex: number;

    constructor(private slService: ShoppingListService) { }

    ngOnInit() {
        // subscribe to startedEditing to know the index of the edited element
        this.subscription = this.slService.startedEditing
        .subscribe(
            (index: number) => {
                this.editedItemIndex = index;
                // if we get an index, we are in edit mode
                this.editMode = true;
            }
        );
    }

    onAddItem(form: NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        this.slService.addIngredient(newIngredient);

        form.reset();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
