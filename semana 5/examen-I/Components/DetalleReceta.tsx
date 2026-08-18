import { View, Text } from 'react-native'
import React from 'react'
import ListaReceta from './ListaReceta';
import { useReceta } from '../Provider/RecetaProvider';

export default function DetalleReceta() {
    
    const { listaRecetas } = useReceta();

  return (
    <View>
      <Text>Detalle de Receta</Text>
      {listaRecetas.map(receta => (
        <View key={receta.id}>
            <Text>Numero: {receta.id}</Text>
            <Text>Nombre: {receta.nombre}</Text>

            <Text>Ingredientes:</Text>
            {receta.ingredientes.map((ingrediente, index) => (
                <Text key={index.toString()}>
                    {ingrediente}
                </Text>
            ))}

            <Text>Fecha: {receta.fecha}</Text>

        </View>
      ))}
    </View>
  )
}