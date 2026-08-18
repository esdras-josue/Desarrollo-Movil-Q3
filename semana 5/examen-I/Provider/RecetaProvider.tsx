import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { ViewReact } from '../models/ViewReact'
import { Receta } from '../models/Receta';
import { RecetaContexto } from '../context/RecetaContexto';

export default function RecetaProvider({children}: ViewReact) {

    const [ listaRecetas, setListaRecetas ] = useState<Receta[]>([]);

    const agregarReceta = (receta: Receta) => {
        setListaRecetas([...listaRecetas, receta]);
    }

    const eleminarReceta = (id: number) => {
        setListaRecetas(listaRecetas.filter(receta => receta.id !== id));
    }

    const buscarReceta = (id: number): Receta => {
        const recetaEncontrada = listaRecetas.find(
            receta => receta.id === id
        );

        return recetaEncontrada as Receta;
    }

  return (
    <RecetaContexto.Provider value={{listaRecetas, agregarReceta,eleminarReceta,buscarReceta}}>
        {children}
    </RecetaContexto.Provider>

  )
}

export const useReceta = () => {
    return useContext(RecetaContexto);
}

