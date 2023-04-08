import React from "react";

import { createStackNavigator,
    TransitionPresets } from "@react-navigation/stack";
import { RestaurantsScreen } from '../../Feature/Restaurant/screens/restaurant.screen';
import { RestaurantDetailsScreen } from "../../Feature/Restaurant/screens/restaurant-details.screen";
const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator
       
        screenOptions={{
            headerShown:false,
          ...TransitionPresets.ModalTransition,
        }}
            >
            <RestaurantStack.Screen
                name="Restau"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailsScreen}
            />
        </RestaurantStack.Navigator>
    )
}