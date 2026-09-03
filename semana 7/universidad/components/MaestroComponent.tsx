import { View, Text, FlatList, TextInput, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Maestro } from "../modelos/Maestro";

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  formContainer: {
    backgroundColor: "#FFF4E6",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#FF8A00",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    fontSize: 14,
    color: "#333",
  },
  buttonContainer: {
    backgroundColor: "#FF8A00",
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 5,
  },
  itemCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#FF8A00",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  itemDetails: {
    fontSize: 13,
    color: "#666",
    marginBottom: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 10,
  },
});

export default function MaestroComponent() {
  const [listaMaestros, setListaMaestros] = useState<Maestro[]>([]);

  const [id, setId] = useState<number>(0);
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [especialidad, setEspecialidad] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
  const [estado, setEstado] = useState<string>("");

  const [accion, setAccion] = useState<number>(0);

  async function obtenerMaestros() {
    const response = await fetch("http://localhost:5000/maestros");
    const data = await response.json();
    setListaMaestros(data.data);
  }

  async function guardarMaestro() {
    if (accion === 0) {
      const response = await fetch("http://localhost:5000/maestros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          especialidad,
          telefono,
          estado,
        }),
      });
    } else {
      const response = await fetch(`http://localhost:5000/maestros/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          especialidad,
          telefono,
          estado,
        }),
      });
    }

    obtenerMaestros();

    setNombre("");
    setApellido("");
    setEspecialidad("");
    setTelefono("");
    setEstado("");
    setAccion(0);
  }

  useEffect(() => {
    obtenerMaestros();
  }, []);

  function editarMaestro(item: Maestro) {
    setId(item.idMaestro);
    setNombre(item.nombre);
    setApellido(item.apellido);
    setEspecialidad(item.especialidad);
    setTelefono(item.telefono);
    setEstado(item.estado.toString());
    setAccion(1);
  }

  async function eliminarMaestro(id: number) {
    const response = await fetch(`http://localhost:5000/maestros/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    obtenerMaestros();
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="👤 Nombre del maestro"
          value={nombre}
          onChangeText={setNombre}
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="👥 Apellido"
          value={apellido}
          onChangeText={setApellido}
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="🎓 Especialidad"
          value={especialidad}
          onChangeText={setEspecialidad}
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="📱 Teléfono"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="✅ Estado (0 o 1)"
          value={estado}
          onChangeText={setEstado}
          keyboardType="numeric"
          placeholderTextColor="#999"
        />

        <View style={styles.buttonContainer}>
          <Button
            title={accion === 0 ? "➕ Guardar maestro" : "✏️  Actualizar"}
            onPress={() => guardarMaestro()}
            color="#FF8A00"
          />
        </View>
      </View>

      <FlatList
        data={listaMaestros}
        keyExtractor={(item) => item.idMaestro.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemTitle}>
              👨‍🏫 {item.nombre} {item.apellido}
            </Text>
            <Text style={styles.itemDetails}>📌 Especialidad: {item.especialidad}</Text>
            <Text style={styles.itemDetails}>📱 Teléfono: {item.telefono}</Text>
            <Text style={styles.itemDetails}>
              ID: {item.idMaestro} | Estado: {item.estado}
            </Text>
            <View style={styles.buttonRow}>
              <Button
                title="✏️ Editar"
                onPress={() => editarMaestro(item)}
                color="#FF8A00"
              />
              <Button
                title="🗑️ Eliminar"
                onPress={() => eliminarMaestro(item.idMaestro)}
                color="#FF5252"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
