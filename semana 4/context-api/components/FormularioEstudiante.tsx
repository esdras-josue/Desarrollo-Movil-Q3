import { View, Text, Alert, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useEstudiante } from '../provider/ProviderEstudiante';
import { Estudiante } from '../interface/Estudiante';
import { Button } from 'react-native';
import ListaEstudiantes from './ListaEstudiantes';

export default function FormularioEstudiante() {
    const {agregarEstudiante, listaEstudiantes} = useEstudiante();
    
    const [ nombre, setNombre ] = useState<string>('');
    
    function agregarEstudianteHandler() {
        let estudiante: Estudiante = {
            id: listaEstudiantes.length +1,
            name: nombre,
        }

        agregarEstudiante(estudiante);
        setNombre('');
    }
    
  return (
    <View>
      <Text>FormularioEstudiante</Text>
      <TextInput placeholder='Ingrese el nombre'
        value={nombre}
        onChangeText={setNombre}
      >
      </TextInput>

      <Button title='Agregar Estudiante' onPress={agregarEstudianteHandler}></Button>

      <ListaEstudiantes />
    
    </View>
  )
}
