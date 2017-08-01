import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

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
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // use the ES6 "spread" operator (...) to turn an array of elements into a list of elements and push them 
        this.ingredients.push(...ingredients);
        
        // send data to observable for response
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}