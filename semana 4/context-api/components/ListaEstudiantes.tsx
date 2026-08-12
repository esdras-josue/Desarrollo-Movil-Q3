import { View, Text } from 'react-native'
import React from 'react'
import { useEstudiante } from '../provider/ProviderEstudiante'
import { FlatList } from 'react-native';

export default function ListaEstudiantes() {
    const { listaEstudiantes } = useEstudiante();

  return (
    <View>
      <Text>ListaEstudiantes</Text>
      <FlatList 
        data={listaEstudiantes}
        renderItem={({item}) => (
            <View>
                <Text>Nombre: {item.name}</Text>
            </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}