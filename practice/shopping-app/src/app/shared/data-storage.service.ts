import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from './../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {

    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService
    ) { }

    storeDRecipes() {
        // const token = this.authService.getToken();
        // const headers = new HttpHeaders().set('Authorization', 'Bearer bezlaigliaz').append('key', 'value');
        // return this.httpClient.put(
        //     'https://ng-recipe-book-7bec3.firebaseio.com/recipes.json',
        //     this.recipeService.getRecipes(),
        //     {
        //         observe: 'body',
        //         params: new HttpParams().set('auth', token)
        //         // headers: headers
        //     }
        // );

        // prepare the request
        const req = new HttpRequest('PUT', 'https://ng-recipe-book-7bec3.firebaseio.com/recipes.json',
            this.recipeService.getRecipes(),
            {
                reportProgress: true, // allow to know the progress of the http call
                // params: new HttpParams().set('auth', token)
            }
        );

        // submit the request and return it
        return this.httpClient.request(req);
    }

    getRecipes() {
        // const token = this.authService.getToken();

        // this.httpClient.get<Recipe[]>(`https://ng-recipe-book-7bec3.firebaseio.com/recipes.json?auth=${token}`)
        this.httpClient.get<Recipe[]>('https://ng-recipe-book-7bec3.firebaseio.com/recipes.json', {
            // params: new HttpParams().set('auth', token),
            observe: 'body', // body (default), response, events
            responseType: 'json' // json (default), text, blob (files), arraybuffer
        })
        .map((recipes) => {
            // the body of response is automatically extract to the right type
            for(let recipe of recipes) {
                // if no ingredients property
                if (!recipe['ingredients']) {
                    console.log(recipe);
                    // just add empty ingredients property
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
        })
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
