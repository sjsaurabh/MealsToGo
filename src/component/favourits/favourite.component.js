
import React, { useContext } from 'react'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import { FavouritesContext } from '../../services/favourites/favourites.context'
import { TouchableOpacity } from 'react-native'

const FavouriteButton =styled(TouchableOpacity)`
position:absolute;
top:25px;
right:25px;
z-index:9;
`


export default function Favourite({ restaurant }) {
    const {favourites,addToFavourites,removeFromFavourites}=useContext(FavouritesContext)
    // console.log(favourites.length) //if want know how many restaurent are favourites
    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteButton
    onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
    <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
    />
    </FavouriteButton>
  )
}
