import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import { useTodo } from '../provider/TodoProvider'

export default function ListaTareas() {
    const { listaTareas, completarTarea } = useTodo();

  return (
    <View>
      <Text>Lista Tareas</Text>

      <FlatList 
        data={listaTareas}
        keyExtractor={(tarea) => tarea.id.toString()}
        renderItem={({ item }) => (
            <View  style={{ marginBottom: 20 }}>
                <Text>ID: {item.id}</Text>
                <Text>Titulo: {item.titulo}</Text>
                <Text>Completada: {item.completada}</Text>

                <Button 
                    title='Marcar como completada'
                    onPress={() => completarTarea(item.id)}
                />
            </View>
        )}
      >

      </FlatList>
    </View>
  )
}