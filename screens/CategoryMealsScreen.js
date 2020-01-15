import React from "react";

import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const cid = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
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
