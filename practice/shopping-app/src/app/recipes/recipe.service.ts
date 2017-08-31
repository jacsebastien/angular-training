import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';

// need to have @Injectable decorator to be able to inject services on it
@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>()
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

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        // .slice() recreate a new copy of the "recipes" array to not return an instance of this array
        return this.recipes.slice();
    }

    getRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    addIngredientsToSl(ingredients: Ingredient[]): void {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe): void {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe): void {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());        
    }
}