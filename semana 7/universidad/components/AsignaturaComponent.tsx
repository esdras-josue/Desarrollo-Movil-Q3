import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { API_URL } from "../config/api";
import { Asignatura } from "../modelos/Asignatura";

export default function AsignaturaComponent() {
  const [listaAsignaturas, setListaAsignaturas] = useState<Asignatura[]>([]);
  const [id, setId] = useState<number>(0);
  const [nombre, setNombre] = useState<string>("");
  const [cantidadhoras, setCantidadhoras] = useState<string>("");
  const [estado, setEstado] = useState<string>("");
  const [accion, setAccion] = useState<number>(0);
  const [error, setError] = useState<string>("");

  async function obtenerAsignaturas() {
    try {
      setError("");
      const response = await fetch(`${API_URL}/asignaturas`);
      const data = await response.json();
      setListaAsignaturas(data.data ?? []);
    } catch {
      setError("No se pudo conectar con el backend de asignaturas.");
    }
  }

  async function guardarAsignatura() {
    try {
      const endpoint =
        accion === 0 ? `${API_URL}/asignaturas` : `${API_URL}/asignaturas/${id}`;

      await fetch(endpoint, {
        method: accion === 0 ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, cantidadhoras, estado }),
      });

      await obtenerAsignaturas();
      setNombre("");
      setCantidadhoras("");
      setEstado("");
      setAccion(0);
    } catch {
      Alert.alert("Error", "No se pudo guardar la asignatura.");
    }
  }

  useEffect(() => {
    obtenerAsignaturas();
  }, []);

  function editarAsignatura(item: Asignatura) {
    setId(item.idAsignatura);
    setNombre(item.nombre);
    setCantidadhoras(item.cantidadhoras.toString());
    setEstado(item.estado.toString());
    setAccion(1);
  }

  async function eliminarAsignatura(idAsignatura: number) {
    try {
      await fetch(`${API_URL}/asignaturas/${idAsignatura}`, {
        method: "DELETE",
      });
      await obtenerAsignaturas();
    } catch {
      Alert.alert("Error", "No se pudo eliminar la asignatura.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de la asignatura"
          value={nombre}
          onChangeText={setNombre}
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Cantidad de horas"
          value={cantidadhoras}
          onChangeText={setCantidadhoras}
          keyboardType="numeric"
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
            title={accion === 0 ? "Guardar asignatura" : "Actualizar"}
            onPress={guardarAsignatura}
            color="#0066FF"
          />
        </View>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {listaAsignaturas.map((item) => (
        <View key={item.idAsignatura.toString()} style={styles.itemCard}>
          <Text style={styles.itemTitle}>{item.nombre}</Text>
          <Text style={styles.itemDetails}>
            ID: {item.idAsignatura} | Horas: {item.cantidadhoras} | Estado:{" "}
            {item.estado}
          </Text>
          <View style={styles.buttonRow}>
            <View style={styles.rowButton}>
              <Button
                title="Editar"
                onPress={() => editarAsignatura(item)}
                color="#00B74E"
              />
            </View>
            <View style={styles.rowButton}>
              <Button
                title="Eliminar"
                onPress={() => eliminarAsignatura(item.idAsignatura)}
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
    backgroundColor: "#F0F4FF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#0066FF",
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
    backgroundColor: "#0066FF",
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
    borderLeftColor: "#00B74E",
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
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 10,
  },
  rowButton: {
    flex: 1,
  },
});
