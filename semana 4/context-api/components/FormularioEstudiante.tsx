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
            id: Date.now(),
            name: nombre,
        }

        agregarEstudiante(estudiante);
        Alert.alert('Estudante agregado correctamente');

        setNombre('');
    }

      useEffect(() => {
        const getEstudiantes = () => {
            const data: Estudiante[] = [
                {id: 1, name: 'esdras'}, {id: 2, name: 'Kevin'}, {id: 3, name: 'isaac'},
                {id: 4, name: 'Lif'}, {id: 5, name: 'Esther'}, {id: 6, name: 'maria'},
                {id: 7, name: 'Cristian'}, {id: 8, name: 'Ruth'}, {id: 9, name: 'Alba'},
                {id: 10, name: 'Luciano'}
  
            ];

            data.forEach((estudiante) => {
                agregarEstudiante(estudiante);
            });
        }

        getEstudiantes();
      },[]);

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
