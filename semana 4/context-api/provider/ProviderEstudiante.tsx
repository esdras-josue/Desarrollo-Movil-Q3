import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Estudiante } from "../interface/Estudiante";
import { ViewReact } from "../interface/ViewReact";
import { ContextoEstudiante } from "../context/ContextoEstudiante";

export default function ProviderEstudiante({ children }: ViewReact) {
    
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);

  const listaEstudiantes: Estudiante[] = [
    { id: 1, name: "Esdras" },
    { id: 2, name: "Kevin" },
    { id: 3, name: "Isacc" },
    { id: 4, name: "Lif" },
    { id: 5, name: "Esther" },
    { id: 6, name: "Juan" },
    { id: 7, name: "Pedro" },
    { id: 8, name: "Laura" },
    { id: 9, name: "Sofia" },
    { id: 10, name: "Daniel" },
  ];

  const agregarEstudiante = (estudiante: Estudiante) => {
    setEstudiantes([...estudiantes, estudiante]);
  };

  useEffect(() => {
    setEstudiantes(listaEstudiantes);
  }, [estudiantes]);

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
