import { View, Text } from 'react-native'
import React from 'react'

export default function FlexDirctionBasics() {
  return (
    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
   
      <View style={{width:50,height:50,backgroundColor:'yellow'}}/>
      <View style={{width:50,height:50,backgroundColor:'red'}}/>
      <View style={{width:50,height:50,backgroundColor:'pink'}}/>
      
    </View>
  )
}