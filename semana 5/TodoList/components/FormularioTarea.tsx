import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useTodo } from '../provider/TodoProvider'
import { Tarea } from '../models/Tarea';


export default function FormularioTarea() {
    const { listaTareas, agregarTarea } = useTodo();

    const [ titulo, setTitulo ] = useState("");
    const [ completada, setCompletada] = useState("false");

    const handleAgregarTarea = () => {
        const nuevaTarea = {
            id: listaTareas.length + 1,
            titulo: titulo,
            completada: completada,
        };

        agregarTarea(nuevaTarea);
        setTitulo("");
        setCompletada("false");
    };

    console.log(listaTareas);

  return (
    <View style={{ marginBottom: 5 }}>
      <Text>Formulario Tarea</Text>

      <TextInput 
        value={titulo}
        onChangeText={setTitulo}
        placeholder='Ingrese un titulo'
      />

      <Button 
        title='Agregar Tarea'
        onPress={handleAgregarTarea}
      />
    </View>
  )
}