import React from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const cid = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(cid) >= 0
  );

  const selectedCategory = CATEGORIES.find(category => category.id === cid);
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const cid = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(category => category.id === cid);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;
