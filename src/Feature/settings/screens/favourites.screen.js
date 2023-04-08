import React, { useContext } from "react";
import styled from "styled-components";
import { TouchableOpacity,View ,SafeAreaView,StatusBar,Text} from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { MyText } from "../../../component/typography/text.components";
import { RestaurantList } from "../../Restaurant/components/restaurant-list.styles";
import { RestaurantInfoCard } from "../../Restaurant/components/restaurant-info-card.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

let SafeArea = styled(SafeAreaView)`
flex:1;
margin-top:${StatusBar.currentHeight}px;
`;

let RestaurantListContainer = styled.View`
flex:1;
padding:14px;
`;
const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);


 

  return favourites.length ? (
    <SafeArea>
    <RestaurantList
    data={favourites}

    renderItem={({ item }) => {
      // console.log(item);
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('RestaurantDetail', {
              restaurant: item,
            })
          }
        >
          <RestaurantListContainer>
            <RestaurantInfoCard restaurent={item} />
          </RestaurantListContainer>
        </TouchableOpacity>
      )
    }}
    keyExtractor={item => item.name}

  />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <MyText variant="error" centre>No favourites yet</MyText>

    </NoFavouritesArea>
  );




};