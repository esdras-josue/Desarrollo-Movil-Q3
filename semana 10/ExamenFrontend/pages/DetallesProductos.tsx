import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

export default function DetallesProductos() {

    const route = useRoute();

    const { producto } = route.params as {
        producto: {
            id: number;
            nombre: string;
            descripcion: string;
            precio: number;
            estado: string;
            categoria: string;
            fotografia_url: string | null;
        };
    };
    
  return (
    <View>
      <Text>{producto.nombre}</Text>
      <Text>{producto.descripcion}</Text>
      <Text>{producto.precio}</Text>
      <Text>{producto.estado}</Text>
      <Text>{producto.categoria}</Text>
    </View>
  )
}