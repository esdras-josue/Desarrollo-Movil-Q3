import { View, Text, ViewProps, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { Producto } from '../models/Producto'
import { API_URL } from '../config/api';
import { ProductoContext } from '../context/ProductoContext';

export default function ProductoProvider({ children }: { children: React.ReactNode }) {

    const [ listaProductos, setListaProductos ] = useState<Producto[]>([]);

    const getProductos = async () => {
      try {
        const response = await fetch(`${API_URL}/productos`);
        const datos = await response.json();
        setListaProductos(datos);

      } catch (error) {
        Alert.alert('Error al agregar producto', (error as Error).message);

      }
    }

    const guardarProducto = async (producto: Producto) => {

      try {
        
        await fetch(`${API_URL}/productos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(producto)

        });

        getProductos();

      } catch (error) {
         Alert.alert('Error al guardar el producto', (error as Error).message);
      }
    }

    const eliminarProducto = async (id: number) => {
      try {
        await fetch(`${API_URL}/items/${id}`, {
          method: "DELETE"
        });

        getProductos();

      } catch (error) {
        Alert.alert('Error al eliminar el producto', (error as Error).message);
      }
    }
    
  return (
    <ProductoContext.Provider value={{ getProductos, guardarProducto,eliminarProducto}}>
      {children}
    </ProductoContext.Provider>
  )
}

export const useContextProducto = () => {
  return useContext(ProductoContext);
}