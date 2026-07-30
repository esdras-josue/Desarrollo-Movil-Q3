import { View, Text } from 'react-native'
import React from 'react'
import { User } from '../interfaces/User'
import UserHeader from './UserHeader'
import UserDetails from './UserDetails'

export default function UserProfile(props: User) {

    let Usuario: User = {
        nombre: "Esdras",
        edad: 24,
        ciudad: "San marcos",
        ocupacion: "Desarrollador"
    }

  return (
    <View>
      <Text>UserProfile</Text>
      <Text>Nombre: {Usuario.nombre}</Text>
      <Text>Edad: {Usuario.edad}</Text>
      <Text>Ciudad: {Usuario.ciudad}</Text>
      <Text style={{ marginBottom: 20 }}>Ocupacion: {Usuario.ocupacion}</Text>

      <UserHeader 
        nombre={Usuario.nombre}
        ocupacion={Usuario.ocupacion}
      />

      <Text style={{ marginBottom: 20 }}></Text>
      
      <UserDetails 
        edad={Usuario.edad}
        ciudad={Usuario.ciudad}
      />
    </View>
  )
}