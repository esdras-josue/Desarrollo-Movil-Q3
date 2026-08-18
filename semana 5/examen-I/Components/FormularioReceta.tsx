import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useReceta } from "../Provider/RecetaProvider";

export default function FormularioReceta() {
  const { agregarReceta, listaRecetas } = useReceta();

  const [nombre, setNombre] = useState("");
  const [ingrediente, setIngrediente] = useState("");
  const [ingredientes, setIngredientes] = useState<string[]>([]);

  const agregarIngrediente = () => {
    if (ingredientes.length < 5 && ingrediente !== "") {
      setIngredientes([...ingredientes, ingrediente]);

      setIngrediente("");
    }
  };

  const guardarReceta = () => {
    const nuevaReceta = {
        id: listaRecetas.length +1,
        nombre: nombre,
        ingredientes: ingredientes,
        fecha: new Date().toDateString()
    };

    agregarReceta(nuevaReceta)
    setNombre("");
    setIngredientes([]);
  }

  return (
    <View>
      <Text>Nombre de la receta</Text>

      <TextInput 
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingrese el nombre"
      />

      <Text>Ingredientes</Text>

      <TextInput 
        value={ingrediente}
        onChangeText={setIngrediente}
        placeholder="Ingrese un ingrediente"
      />

      <Button 
        title="Agregar ingrediente"
        onPress={agregarIngrediente}
      />

      <Text>Ingredientes: {ingredientes.length}/5</Text>

      <Button 
        title="Guardar receta"
        onPress={guardarReceta}
      />
    </View>
  );
}
