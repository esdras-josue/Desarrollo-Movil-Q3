import {
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useContextProducto } from "../Provider/ProductoProvider";
import { Producto } from "../models/Producto";

export default function AgregarProducto() {
  const { getProductos, guardarProducto } = useContextProducto();

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [disponible, setDisponible] = useState(true);

  const guardar = async () => {
    if (
      nombre === "" ||
      descripcion === "" ||
      precio === "" ||
      categoria === ""
    ) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    const nuevoProducto: Producto = {
      nombre: nombre,
      descripcion: descripcion,
      precio: Number(precio),
      estado: disponible ? "Disponible" : "No disponible",
      categoria: categoria,
      fotografia_url: null,
    };

    await guardarProducto(nuevoProducto);

    Alert.alert("Producto guardado");

    setNombre("");
    setDescripcion("");
    setPrecio("");
    setCategoria("");
    setDisponible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nuevo Producto</Text>

      <Text>Nombre</Text>

      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre del producto"
      />

      <Text>Descripcion</Text>

      <TextInput
        style={styles.input}
        value={descripcion}
        onChangeText={setDescripcion}
        placeholder="Descripción"
      />

      <Text>Precio</Text>

      <TextInput
        style={styles.input}
        value={precio}
        onChangeText={setPrecio}
        placeholder="Precion"
        keyboardType="numeric"
      />

      <Text>Categoria</Text>

      <TextInput
        style={styles.input}
        value={categoria}
        onChangeText={setCategoria}
        placeholder="Categoria"
      />

      <View style={styles.estadoContainer}>
        <Text>Estado: {disponible ? " Disponible" : " No disponible"}</Text>

        <Switch value={disponible} onValueChange={setDisponible} />
      </View>

      <TouchableOpacity style={styles.boton} onPress={guardar}>
        <Text style={styles.textoBoton}>Guardar Producto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
  },

  estadoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  boton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  textoBoton: {
    color: "white",
    fontWeight: "bold",
  },
});
