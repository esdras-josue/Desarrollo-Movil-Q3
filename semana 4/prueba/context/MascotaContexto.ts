import { createContext } from "react";
import { Bitacora } from '../models/Bitacora';
import { Indicador } from "../models/Indicador";

export const MascotaContexto = createContext({
    nombre: "",
    indicadores: [] as Indicador[],
    estadoAnimo: "",
    necesitaAyuda: false,
    puedeJugar: true,
    modoNoche: false,
    alternarModoNoche: () => {},
    cambiarNombre: (nuevoNombre: string) => {},
    alimentar: () => {},
    jugar: () => {},
    descansar: () => {},
    reiniciar: () => {},
    bitacora: [] as Bitacora[],

});
