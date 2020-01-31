import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favouriteMeals);

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "My favourites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavouritesScreen;
