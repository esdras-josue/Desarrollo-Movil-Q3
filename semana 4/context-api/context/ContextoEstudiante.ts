import { createContext } from "react";
import { Estudiante } from '../interface/Estudiante';

export const ContextoEstudiante = createContext({
    listaEstudiantes: [] as Estudiante[],
    agregarEstudiante: (estudiante: Estudiante) =>{},
});