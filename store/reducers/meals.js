import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: []
};

const MealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(
        meal => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavouriteMeals = [...state.favouriteMeals];
        updatedFavouriteMeals.splice(existingIndex, 1);
        return { ...state, favouriteMeals: updatedFavouriteMeals };
      } else {
        const newMeal = state.meals.find(meal => meal.id === action.mealId);
        return {
          ...state,
          favouriteMeals: state.favouriteMeals.concat(newMeal)
        };
      }
    default:
      return state;
  }
};

export default MealsReducer;
