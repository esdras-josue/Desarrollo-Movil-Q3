import { View, Text } from 'react-native';
import React from 'react';
import { User } from '../interfaces/User';

export default function UserHeader({nombre, ocupacion}: User) {
  return (
    <View>
      <Text>UserHeader</Text>
      <Text>Nombre: {nombre}</Text>
      <Text>Ocupacion: {ocupacion}</Text>
    </View>
  )
}