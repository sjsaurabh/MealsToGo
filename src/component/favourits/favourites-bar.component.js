import React from "react";

import { ScrollView, TouchableOpacity,View,Text } from "react-native";
import styled from "styled-components";
import { Spacer, Spacers } from "../spacer/spacer.components";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component"; 
import { MyText } from "../typography/text.components";

let RestaurantListContainer = styled.View`
flex:1;
padding:8px;

`;
const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
 
  return (
    <FavouritesWrapper>
       <RestaurantListContainer>
        <MyText variant="caption">Favourites</MyText>
       </RestaurantListContainer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <RestaurantListContainer key={key} >
           
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
              </RestaurantListContainer>
            
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};