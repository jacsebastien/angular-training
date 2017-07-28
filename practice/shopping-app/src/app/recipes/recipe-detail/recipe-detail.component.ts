import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipeService } from './../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;

    constructor(private recipeService: RecipeService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        // work when we first load the component but will not work if we want to actualize it
        // const id = this.route.snapshot.params['id'];

        // will listend for changes and change the id each time we click on a new recipe
        this.route.params
        .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipe(this.id);
            }
        );
    }

    onAddToShoppingList() {
        this.recipeService.addIngredientsToSl(this.recipe.ingredients)
    }

    onEditRecipe() {
        // navigate to "/recipes/:id/edit"
        this.router.navigate(['edit'], {relativeTo: this.route});

        // OR to be more flexible we can create a more complexe navigation
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }
}
