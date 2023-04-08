
// import React, { useContext } from "react";
// import styled from "styled-components";
// import { TouchableOpacity,View ,SafeAreaView,StatusBar} from "react-native";
// import { FavouritesContext } from "../../../services/favourites/favourites.context";
// import { MyText } from "../../../component/typography/text.components";
// import { RestaurantList } from "../../Restaurant/components/restaurant-list.styles";
// import { RestaurantInfoCard } from "../../Restaurant/components/restaurant-info-card.components";

// import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

// let SafeArea = styled(SafeAreaView)`
// flex:1;
// margin-top:${StatusBar.currentHeight}px;
// `;

// let RestaurantListContainer = styled.View`
// flex:1;
// padding:14px;
// `;
// const NoFavouritesArea = styled(SafeArea)`
//   align-items: center;
//   justify-content: center;
// `;
// export const FavouritesScreen = ({ navigation }) => {
//   const { favourites } = useContext(FavouritesContext);
//   const { restaurants } = useContext(RestaurantsContext);

//   return favourites.length ? (
//     <SafeArea>
//     <RestaurantList
//     data={favourites}

//     renderItem={({ item }) => {
//       // console.log(item);
//       return (
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate('RestaurantDetail', {
//               restaurant: item,
//             })
//           }
//         >
//           <RestaurantListContainer>
//             <RestaurantInfoCard restaurent={item} />
//           </RestaurantListContainer>
//         </TouchableOpacity>
//       )
//     }}
//     keyExtractor={item => item.name}

//   />
//     </SafeArea>
//   ) : (
//     <NoFavouritesArea>
//       <MyText centre>No favourites yet</MyText>
//     </NoFavouritesArea>
//   );
// };
// ///................................................................................................................



// import React, { useContext, useState } from "react";

// import { ActivityIndicator, Searchbar } from "react-native-paper";
// import { StatusBar, StyleSheet, SafeAreaView, Text, View, FlatList, TouchableOpacity } from "react-native";
// import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
// import styled from "styled-components";
// import { Spacer, Spacers } from "../../../component/spacer/spacer.components";
// import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
// import { RestaurantList } from "../components/restaurant-list.styles";
// import { FavouritesBar } from "../../../component/favourits/favourites-bar.component";
// import {FavouritesContext} from '../../../services/favourites/favourites.context'
// import { Colors } from "react-native/Libraries/NewAppScreen";
// import { Search } from "../components/search.component";
// let SafeArea = styled(SafeAreaView)`
// flex:1;
// margin-top:${StatusBar.currentHeight}px;
// `;


// let RestaurantListContainer = styled.View`
// flex:1;
// padding:14px;
// `;
// const Loading = styled(ActivityIndicator)`
// margin-left:-25px;
// `
// const LoadingContainer = styled.View`
// position:absolute;
// top:50%;
// left:50%;
// `
// export const RestaurantsScreen = ({ navigation }) => {
//   const { isLoading,  restaurants } = useContext(RestaurantsContext);
//   const { favourites } = useContext(FavouritesContext);
//   const [isToggled, setIsToggled] = useState(false);

//   // console.log(favourites);
//   // console.log(navigation);
//   // console.log(restaurants.results);
//   return (
//     <SafeArea >
//       {isLoading && (
//         <LoadingContainer>
//           <Loading size={50} animating={true} color={Colors.blue300} />
//         </LoadingContainer>
//       )}
//       <Search 
//       isFavouritesToggled={isToggled}
//       onFavouritesToggle={() => setIsToggled(!isToggled)}
//       />
//       {
//         isToggled && (
//           <FavouritesBar
//           favourites={favourites}
//           onNavigate={navigation.navigate}
//         />
//         )
       
//       }
//       <RestaurantList
//         data={restaurants}

//         renderItem={({ item }) => {
//           // console.log(item);
//           return (
//             <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate('RestaurantDetail', {
//                   restaurant: item,
//                 })
//               }
//             >
//               <RestaurantListContainer >
//                 <RestaurantInfoCard restaurent={item} />
//               </RestaurantListContainer>
//             </TouchableOpacity>
//           )
//         }}
//         keyExtractor={item => item.name}

//       />


//     </SafeArea>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
//   search: {
//     padding: 16,
//   },
//   list: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "blue",
//   },
// });
// ///................................................................................................................
// import styled from "styled-components";
// import { FlatList } from "react-native";

// export const RestaurantList = styled(FlatList).attrs({
//   contentContainerStyle: {
//     padding: 16,
//   },
// })``;