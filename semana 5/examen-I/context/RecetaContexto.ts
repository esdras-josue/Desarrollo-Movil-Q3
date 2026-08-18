import { createContext } from "react";
import { Receta } from '../models/Receta';

export const RecetaContexto = createContext({
    listaRecetas: [] as Receta[],
    agregarReceta: (receta: Receta) => {},
    eleminarReceta: (id: number) => {},
    buscarReceta: (id: number) => {
        return {} as Receta
    }
});
