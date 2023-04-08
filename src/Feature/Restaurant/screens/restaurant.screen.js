

import React, { useContext, useState } from "react";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View, FlatList, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components";
import { Spacer, Spacers } from "../../../component/spacer/spacer.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesBar } from "../../../component/favourits/favourites-bar.component";
import {FavouritesContext} from '../../../services/favourites/favourites.context'
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Search } from "../components/search.component";
import { FadeInView } from "../../../component/animations/fade.animation";
let SafeArea = styled(SafeAreaView)`
flex:1;
margin-top:${StatusBar.currentHeight}px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 1 }
}
)`
margin: ${(props) => props.theme.space[3]}
`;
let RestaurantListContainer = styled.View`
flex:1;
padding:14px;
`;
const Loading = styled(ActivityIndicator)`
margin-left:-25px;
`
const LoadingContainer = styled.View`
position:absolute;
top:50%;
left:50%;
`
export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading,  restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  // console.log(favourites);
  // console.log(navigation);
  // console.log(restaurants.results);
  return (
    <SafeArea >
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search 
      isFavouritesToggled={isToggled}
      onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {
        isToggled && 
        <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
      }
      <RestaurantList
        data={restaurants}

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
              <RestaurantListContainer >
                 <FadeInView>
                <RestaurantInfoCard restaurent={item} />
                </FadeInView>
              </RestaurantListContainer>
            </TouchableOpacity>
          )
        }}
        keyExtractor={item => item.name}

      />


    </SafeArea>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});