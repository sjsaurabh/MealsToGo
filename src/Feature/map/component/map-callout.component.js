
import React from 'react'

import { CompactRestaurantInfo } from '../../../component/restaurant/compact-restaurant-info.component'


export const Mapcallout=({restaurant})=>{
  
return(
  <CompactRestaurantInfo restaurant={restaurant} isMap />
)
}