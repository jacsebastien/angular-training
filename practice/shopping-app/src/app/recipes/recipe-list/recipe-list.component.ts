import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    // create a void array type of Recipe to receive recipes
    recipes: Recipe[];
    subscription: Subscription

    // inject services in constructor
    constructor(private recipeService: RecipeService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.subscription = this.recipeService.recipesChanged
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
            }
        );
        this.recipes = this.recipeService.getRecipes();
    }

    onNewRecipe() {
        // navigate to /recipes/new
        this.router.navigate(['new'], {relativeTo: this.route})
    }

    ngOnDestroy() {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    }
}
