import { React } from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
  }
};

const MealsNavigator = createStackNavigator(
  {
    Categories: { screen: CategoriesScreen },
    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetail: { screen: MealDetailScreen }
  },
  defaultStackNavOptions
);

const FavNavigatior = createStackNavigator(
  {
    Favorites: { screen: FavouritesScreen },
    MealDetail: { screen: MealDetailScreen }
  },
  defaultStackNavOptions
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      /*tabBarIcon: tabInfo => {
        return (
          <Ionicons
            name="ios-restaurant"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },*/
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavNavigatior,
    navigationOptions: {
      /*tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        );
      },*/
      tabBarColor: Colors.primaryColor
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.secondaryColor
        }
      });

export default createAppContainer(MealsFavTabNavigator);
