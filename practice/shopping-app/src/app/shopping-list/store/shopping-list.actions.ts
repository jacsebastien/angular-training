import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

// create unique indentifier for the action
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

// create an add class which uses the unique identifier as a type
export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;  // need to be provided to correspond to Action interface
    payload: Ingredient; // add the payload that we need for getting new data
}

// export ShoppingListActions which will contains all of our exported actions
export type ShoppingListActions = AddIngredient;
