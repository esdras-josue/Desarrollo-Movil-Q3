import { View, Text } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { Estudiante } from "../interface/Estudiante";
import { ViewReact } from "../interface/ViewReact";
import { ContextoEstudiante } from "../context/ContextoEstudiante";

export default function ProviderEstudiante({ children }: ViewReact) {
  const [listaEstudiantes, setEstudiantes] = useState<Estudiante[]>([]);

  const agregarEstudiante = (estudiante: Estudiante) => {
    setEstudiantes((prev) => [...prev, estudiante]);
  };


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
