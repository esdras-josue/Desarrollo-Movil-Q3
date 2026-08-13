import { View, Text } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { Estudiante } from '../interface/Estudiante';
import { ViewReact } from "../interface/ViewReact";
import { ContextoEstudiante } from "../context/ContextoEstudiante";

export default function ProviderEstudiante({ children }: ViewReact) {

  const [ listaEstudiantes, setEstudiantes] = useState<Estudiante[]>([]);

  const agregarEstudiante = (estudiante: Estudiante) => {
    setEstudiantes([...listaEstudiantes, estudiante]);
  };

  useEffect(() => {
    const lista : Estudiante[]= [
    { id: 1, name: "esdras" },
    { id: 2, name: "Kevin" },
    { id: 3, name: "isaac" },
    { id: 4, name: "Lif" },
    { id: 5, name: "Esther" },
    { id: 6, name: "maria" },
    { id: 7, name: "Cristian" },
    { id: 8, name: "Ruth" },
    { id: 9, name: "Alba" },
    { id: 10, name: "Luciano" },
    ];

    setEstudiantes(lista);
  },[]);
  
  return (
    <View>
      <ContextoEstudiante.Provider
        value={{ listaEstudiantes, agregarEstudiante }}
      >
        {children}
      </ContextoEstudiante.Provider>
    </View>
  );
}

export const useEstudiante = () => {
  return useContext(ContextoEstudiante);
};
