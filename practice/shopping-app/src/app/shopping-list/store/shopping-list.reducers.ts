import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from 'app/shared/ingredient.model';

// create an overall AppState interface with the differents states
export interface AppState {
    shoppingList: State
}

export interface State {
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientIndex: number
}

// define the initial values at app start
const initialState: State = {
    ingredients: [
        new Ingredient('Kiwi', 2),
        new Ingredient('Appel', 4)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

// replace the old state by a new one and return it
// if "state" doesn't exists, init it with initialState
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch(action.type) {
        // if we try to add ingredients
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state, // copy all properties of the 'state' object
                ingredients: [ // override 'ingredients' property with all existing ingredients + new data
                    ...state.ingredients, // add all old ingredients
                    action.payload // + the new one which is inside action
                ]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    ...action.payload // + all the new ingredients
                ]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            // get the list of all existing ingredients;
            const ingredients = [...state.ingredients];
            // replace the one corresponding to the index
            // ingredients[action.payload.index] = action.payload.ingredient;
            ingredients[state.editedIngredientIndex] = action.payload.ingredient;

            return {
                ...state,
                ingredients: ingredients
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            // oldIngredients.splice(action.payload, 1);
            oldIngredients.splice(state.editedIngredientIndex, 1);

            return {
                ...state,
                ingredients: oldIngredients
            }
        case ShoppingListActions.START_EDIT:
            // get all properties of the edited ingredient
            const editedIngredient = {...state.ingredients[action.payload]};
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            }
        // if type do not correspond to any action, just return the state
        default:
            return state;
    }
}
