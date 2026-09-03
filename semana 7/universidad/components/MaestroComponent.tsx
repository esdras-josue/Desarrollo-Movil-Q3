import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { API_URL } from "../config/api";
import { Maestro } from "../modelos/Maestro";

export default function MaestroComponent() {
  const [listaMaestros, setListaMaestros] = useState<Maestro[]>([]);
  const [id, setId] = useState<number>(0);
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [especialidad, setEspecialidad] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
  const [estado, setEstado] = useState<string>("");
  const [accion, setAccion] = useState<number>(0);
  const [error, setError] = useState<string>("");

  async function obtenerMaestros() {
    try {
      setError("");
      const response = await fetch(`${API_URL}/maestros`);
      const data = await response.json();
      setListaMaestros(data.data ?? []);
    } catch {
      setError("No se pudo conectar con el backend de maestros.");
    }
  }

  async function guardarMaestro() {
    try {
      const endpoint =
        accion === 0 ? `${API_URL}/maestros` : `${API_URL}/maestros/${id}`;

      await fetch(endpoint, {
        method: accion === 0 ? "POST" : "PUT",
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

      await obtenerMaestros();
      setNombre("");
      setApellido("");
      setEspecialidad("");
      setTelefono("");
      setEstado("");
      setAccion(0);
    } catch {
      Alert.alert("Error", "No se pudo guardar el maestro.");
    }
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

  async function eliminarMaestro(idMaestro: number) {
    try {
      await fetch(`${API_URL}/maestros/${idMaestro}`, {
        method: "DELETE",
      });
      await obtenerMaestros();
    } catch {
      Alert.alert("Error", "No se pudo eliminar el maestro.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre del maestro"
          value={nombre}
          onChangeText={setNombre}
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Especialidad"
          value={especialidad}
          onChangeText={setEspecialidad}
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Telefono"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Estado (0 o 1)"
          value={estado}
          onChangeText={setEstado}
          keyboardType="numeric"
          placeholderTextColor="#999"
        />

        <View style={styles.buttonContainer}>
          <Button
            title={accion === 0 ? "Guardar maestro" : "Actualizar"}
            onPress={guardarMaestro}
            color="#FF8A00"
          />
        </View>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {listaMaestros.map((item) => (
        <View key={item.idMaestro.toString()} style={styles.itemCard}>
          <Text style={styles.itemTitle}>
            {item.nombre} {item.apellido}
          </Text>
          <Text style={styles.itemDetails}>
            Especialidad: {item.especialidad}
          </Text>
          <Text style={styles.itemDetails}>Telefono: {item.telefono}</Text>
          <Text style={styles.itemDetails}>
            ID: {item.idMaestro} | Estado: {item.estado}
          </Text>
          <View style={styles.buttonRow}>
            <View style={styles.rowButton}>
              <Button
                title="Editar"
                onPress={() => editarMaestro(item)}
                color="#FF8A00"
              />
            </View>
            <View style={styles.rowButton}>
              <Button
                title="Eliminar"
                onPress={() => eliminarMaestro(item.idMaestro)}
                color="#FF5252"
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

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
  errorText: {
    color: "#B00020",
    marginBottom: 12,
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
    columnGap: 10,
    marginTop: 10,
  },
  rowButton: {
    flex: 1,
  },
});
