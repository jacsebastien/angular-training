import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from 'app/shared/ingredient.model';

const initialState = {
    ingredients: [
        new Ingredient('Kiwi', 2),
        new Ingredient('Appel', 4)
    ]
};

// replace the old state by a new one and return it
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state, // copy all properties of the 'state' object
                ingredients: [ // override 'ingredients' property with all existing ingredients + new data
                    ...state.ingredients,
                    action.payload
                ]
            };
        default:
            return state;
    }
}
