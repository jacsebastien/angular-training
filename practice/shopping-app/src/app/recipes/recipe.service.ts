import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';

// need to have @Injectable decorator to be able to inject services on it
@Injectable()
export class RecipeService {
    // create an event emitter which get/return the value of selected recipe
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is a simply test', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/899px-Recipe-575434.svg.png',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'A Second Recipe', 
            'This is an other test', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/899px-Recipe-575434.svg.png',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    // inject the shopping list service to get access to the list in this service
    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        // .slice() recreate a new copy of the "recipes" array to not return an instance of this array
        return this.recipes.slice();
    }

    addIngredientsToSl(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}