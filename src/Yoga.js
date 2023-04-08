import { View, Text } from 'react-native'
import React from 'react'

export default function Yoga() {
    return (
        <View style={{
          flex: 1,
          width: 500,
          height: 500,
          backgroundColor:'red'
        }}>
          <View style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor:'pink'
          }} />
          <View style={{
            flex: 1,
            width: 500,
            height: 300,
            backgroundColor:'black'
          }} />
          <View style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor:'green'
          }} />
        </View>
      );
}
