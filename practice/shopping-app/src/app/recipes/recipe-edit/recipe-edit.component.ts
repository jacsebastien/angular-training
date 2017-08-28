import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id: number;
    editMode: boolean = false;
    recipeForm: FormGroup;
    
    constructor(private route: ActivatedRoute,
        private recipeService: RecipeService,
        private router: Router) { 

    }

    ngOnInit() {
        this.route.params
        .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                // editMode equals true if id is not null, else it equals false
                this.editMode = params['id'] != null;
                this.initForm();
            }
        );
    }

    onSubmit() {
        console.log(this.recipeForm);

        // const newRecipe = new Recipe(
        //     this.recipeForm.value['name'], 
        //     this.recipeForm.value['description'],
        //     this.recipeForm.value['imagePath'],
        //     this.recipeForm.value['ingredients']
        // );
         
        if(this.editMode) {
            // recipeForm has the exact same structure than Recipe so we can pass it directly
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        } else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }

        this.onCancel();
    }

    // Add a new control to the array of form controls
    onAddIngredient() {
        // get ingredients of recipeForm and tells TypeScript that it's a FormArray
        (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup({
                'name': new FormControl(null, Validators.required),
                'amount': new FormControl(null, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
            })
        );
    }

    onDeleteIngredient(index: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    private initForm():void {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        let recipeIngredients = new FormArray([]);

        if(this.editMode) {
            const recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;

            recipe.ingredients.map(ingredient => {
                recipeIngredients.push(
                    new FormGroup({
                        'name': new FormControl(ingredient.name, Validators.required),
                        'amount': new FormControl(ingredient.amount, [
                            Validators.required,
                            Validators.pattern(/^[1-9]+[0-9]*$/)
                        ])
                    })
                );
            });
        }

        this.recipeForm = new FormGroup({
            'name': new FormControl(recipeName, Validators.required),
            'imagePath': new FormControl(recipeImagePath, Validators.required),
            'description': new FormControl(recipeDescription, Validators.required),
             // recipeIngredients already is a FormArray so don't need to create one
            'ingredients': recipeIngredients 
        });
    }
}
