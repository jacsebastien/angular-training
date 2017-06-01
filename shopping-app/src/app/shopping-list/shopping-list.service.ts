import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Kiwi', 2),
        new Ingredient('Appel', 4)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // emit a new copy of the private "ingredients" array when we add an ingredient on it
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // Too many event emitters
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        // use the ES6 "spread" operator (...) to turn an array of elements into a list of elements and push them 
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}