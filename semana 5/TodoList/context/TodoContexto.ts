import { createContext } from "react";
import { Tarea } from "../models/Tarea";

export const TodoContexto = createContext({
    listaTareas : [] as Tarea[],
    agregarTarea:  (tarea: Tarea)=> {},
    completarTarea: (id: number) => {},
});