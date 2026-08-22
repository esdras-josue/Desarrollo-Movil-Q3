import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Tarea } from '../models/Tarea';
import { TodoContexto } from '../context/TodoContexto';

export default function TodoProvider({children}: {children: React.ReactNode}) {

    const [ listaTareas, setListaTareas ] = useState<Tarea[]>([]);

    const agregarTarea = (tarea: Tarea) => {
        setListaTareas([...listaTareas, tarea]);
    }

    const completarTarea = (id: number) => {
        const tareasActualizada = listaTareas.map( tarea => {
            if(tarea.id === id) {
                return {...tarea, completada: "✔️"} 
            }

            return tarea;
        })

        setListaTareas(tareasActualizada);
    }

    useEffect(() => {
        const cargarTareasIniciales : Tarea[] = [
            {id: 1, titulo: 'Estudiar Programacion', completada: "❌", },
            {id: 2, titulo: 'Hacer Ejercicio', completada: "❌"},
            {id: 3, titulo: 'Leer 30 minutos', completada: "❌"},
            {id: 4, titulo: 'Ordenar mi habitacion', completada: "❌"},
            {id: 5, titulo: 'Lavar mi ropa', completada: "❌"}
        ]

        setListaTareas(cargarTareasIniciales);
    },[]);

  return (
    <TodoContexto.Provider value={{listaTareas,agregarTarea,completarTarea}}>
       { children } 
    </TodoContexto.Provider>

  )
}

export const useTodo = () => {
    return useContext(TodoContexto);
}