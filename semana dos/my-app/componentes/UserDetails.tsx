import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { User } from '../interfaces/User'

export default function UserDetails({edad, ciudad}: User) {
  return (
    <View>
      <Text>UserDatails</Text>
      <Text>Edad: {edad}</Text>
      <Text>Ciudad: {ciudad}</Text>
    </View>  
  )
}