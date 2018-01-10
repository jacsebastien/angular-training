/*
    this file ca be deleted because nothing is used anymore
    I keep it for exemple of old app state before reducer
*/

import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Kiwi', 2),
        new Ingredient('Appel', 4)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // emit a new copy of the private "ingredients" array when we add an ingredient on it
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);

        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // use the ES6 "spread" operator (...) to turn an array of elements into a list of elements and push them
        this.ingredients.push(...ingredients);

        // send data to observable for response
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
