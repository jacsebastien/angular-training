import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from './../recipes/recipe.model';
import { Observable } from "rxjs/Observable";

import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService) { }

    storeDRecipes() {
        return this.http.put('https://ng-recipe-book-7bec3.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get('https://ng-recipe-book-7bec3.firebaseio.com/recipes.json')
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes) {
                    // if no ingredients property
                    if(!recipe['ingredients']) {
                        console.log(recipe);
                        // just add empty ingredients property
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
