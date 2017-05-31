import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    // create an event emitter which get/return the value of selected recipe
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simply test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/899px-Recipe-575434.svg.png'),
        new Recipe('A Second Recipe', 'This is an other test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/899px-Recipe-575434.svg.png')
    ];

    getRecipes() {
        // .slice() recreate a new copy of the "recipes" array to not return an instance of this array
        return this.recipes.slice();
    }
}