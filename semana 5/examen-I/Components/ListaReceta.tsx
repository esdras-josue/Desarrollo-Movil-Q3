import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import { useReceta } from '../Provider/RecetaProvider'

export default function ListaReceta() {
    const {listaRecetas, eleminarReceta} = useReceta();

  return (
    <View>
      <Text>Lista Receta</Text>

      <FlatList
        data={listaRecetas}
        keyExtractor={(receta)=> receta.id.toString()}
        renderItem={({ item }) => (
            <View>
                <Text>Numero: {item.id}</Text>
                <Text>Nombre: {item.nombre}</Text>
                <Text>Ingrediente: {item.ingredientes.join(", ")}</Text>
                <Text>Fecha: {item.fecha}</Text>

                <Button 
                    title='Eliminar'
                    onPress={() => eleminarReceta(item.id)}
                />
            </View>
        )}
      >
      </FlatList>
    </View>
  )
}