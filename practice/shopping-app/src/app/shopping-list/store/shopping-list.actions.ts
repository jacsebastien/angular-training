import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

// create unique indentifier for the action
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

// create an add class which uses the unique identifier as a type
export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;  // need to be provided to correspond to Action interface
    // add the payload that we need for getting new data
    // use a constructor for setting payload shen we want to add an ingredient
    constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;
    constructor(public payload: Ingredient[]) {}
}

// export ShoppingListActions which will contains all of our exported actions added with union type operator
export type ShoppingListActions = AddIngredient | AddIngredients;
