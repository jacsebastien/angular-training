import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

// add a constant used to know what the action is doing
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;  // need to be provided to correspond to Action interface
    // add the payload that we need to manage data
    payload: Ingredient;
}

// export ShoppingListActions which will contains all of our exported actions
export type ShoppingListActions = AddIngredient;
