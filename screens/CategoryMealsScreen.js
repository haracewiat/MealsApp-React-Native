import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  const cid = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(cid) >= 0
  );

  const selectedCategory = CATEGORIES.find(category => category.id === cid);
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const cid = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(category => category.id === cid);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
