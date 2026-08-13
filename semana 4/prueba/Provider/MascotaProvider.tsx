import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { ViewReact } from '../models/ViewReact'
import { Indicador } from '../models/Indicador';
import { Bitacora } from '../models/Bitacora';
import { MascotaContexto } from '../context/MascotaContexto';

export default function MascotaProvider({children}: ViewReact) {
    const [nombre, setNombre] = useState("Pixel");
    const [indicadores, setIndicadores] = useState<Indicador[]>([
        {
            nombre: "Alimento",
            valor: 60,
        },
        {
            nombre: "Energia",
            valor: 60,
        },
        {
            nombre: "Animo",
            valor: 60,
        }

    ]);

    const [modoNoche, setModoNoche] = useState(false);
    const [bitacora, setBitacora] = useState<Bitacora[]>([]);

    const obtenerIndicador = (nombreIndicador: string): number => {
        const indicador = indicadores.find(i => i.nombre === nombreIndicador);

        return indicador?.valor ?? 0;
    }

    const animo = obtenerIndicador("Animo");
    const energia = obtenerIndicador("Energia");

    let estadoAnimo = "";

    if (animo >= 75){
        estadoAnimo = "Feliz";
    } else if (animo >= 50) {
        estadoAnimo = "Normal";
    } else if (animo >= 25) {
        estadoAnimo = "Decaido";
    } else {
        estadoAnimo = "Critico";
    }

    const necesitaAyuda = indicadores.some(
        Indicador => Indicador.valor === 0
    );

    const puedeJugar = energia >= 15;

    const limitarValor = (valor: number): number => {
        return Math.min(100, Math.max(0, valor));
    }

    const agregarBitacora = (mensaje: string): void => {
        const nuevaEntrada: Bitacora = {
            mensaje,
            hora: new Date().toLocaleTimeString([],{
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        setBitacora(entradas => [
            nuevaEntrada,
            ...entradas,
        ]);
    };

    const cambiarNombre = (nuevoNombre: string): void => {
        setNombre(nuevoNombre);
    }

    const alternarModoNoche = (): void => {
        setModoNoche(modo => !modo);
    }

    const alimentar = (): void => {
        setIndicadores(indicadoresActuales => 
            indicadoresActuales.map(indicador => {
                if (indicador.nombre === "Alimento") {
                    return {
                        ...indicador,
                        valor: limitarValor(indicador.valor +20),
                    };
                }

                if (indicador.nombre === "Energia") {
                    return {
                        ...indicador,
                        valor: limitarValor(indicador.valor -5)
                    };
                }

                if (indicador.nombre === "Animo") {
                    return {
                        ...indicador,
                        valor: limitarValor(indicador.valor + 5),
                    };
                }

                return indicador;
            })
        )

        agregarBitacora("Pixel comio un pescadito");
    }

    const jugar = (): void => {
        if (!puedeJugar) {
            return;
        }

        setIndicadores(indicadoresActuales =>
            indicadoresActuales.map(indicador => {
                if (indicador.nombre === "Alimento") {
                    return {
                        ...indicador,
                        valor: limitarValor(indicador.valor - 10),
                    };
                }

                if (indicador.nombre === "Energia") {
                    return {
                        ...indicador,
                        valor: limitarValor(indicador.valor - 15),
                    };
                }

                if (indicador.nombre === "Animo") {
                    return {
                        ...indicador,
                        valor: limitarValor(indicador.valor + 20),
                    };
                }

                return indicador;
            })        
        );

        agregarBitacora("Pixel esta jugando");
    }

    const descansar = (): void => {
        const energiaRecuparada = modoNoche ? 40 : 25;

        setIndicadores(indicadoresActuales => 
            indicadoresActuales.map(indicador => {

                if (indicador.nombre === "Alimento") {
                    return {
                        ...indicador,
                        valor: limitarValor(indicador.valor - 10),
                    };
                }

                if (indicador.nombre === "Energia") {
                    return {
                        ...indicador,
                        valor: limitarValor (
                            indicador.valor + energiaRecuparada
                        ),
                    };
                }

                if (indicador.nombre === "Animo") {
                    return {
                        ...indicador,
                        valor: limitarValor(indicador.valor - 5),
                    };
                }

                return indicador
            })
        );

        if (modoNoche) {
            agregarBitacora("Pixel descanso bien");
        } else {
            agregarBitacora("Pixel desanso un rato");
        }
    };

    const reiniciar = (): void => {
        setNombre("Pixel");

        setIndicadores([
            {
                nombre: "Alimento",
                valor: 60,
            },
            {
                nombre: "Energia",
                valor: 60,
            },
            {
                nombre: "Animo",
                valor: 60,
            },
        ]);

        setModoNoche(false);
        setBitacora([]);
    };



    return (
        <MascotaContexto.Provider value={{
            nombre, 
            indicadores, 
            estadoAnimo, 
            necesitaAyuda, 
            puedeJugar, 
            modoNoche,
            alternarModoNoche,
            cambiarNombre,
            alimentar,
            jugar,
            descansar,
            reiniciar,
            bitacora
        }}>
            {children}
        </MascotaContexto.Provider>
    );
}

export const useMascota = () => {
    return useContext(MascotaContexto);
}

