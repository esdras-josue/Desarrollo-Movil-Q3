import { View, Text, FlatList, TextInput, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Asignatura } from "../modelos/Asignatura";

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
    gap: 10,
  },
  buttonEdit: {
    flex: 1,
    backgroundColor: "#00B74E",
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: "center",
  },
  buttonDelete: {
    flex: 1,
    backgroundColor: "#FF5252",
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
});

export default function AsignaturaComponent() {
  const [listaAsignaturas, setListaAsignaturas] = useState<Asignatura[]>([]);

  const [id, setId] = useState<number>(0);
  const [nombre, setNombre] = useState<string>("");
  const [cantidadhoras, setCantidadhoras] = useState<string>("");
  const [estado, setEstado] = useState<string>("");

  const [accion, setAccion] = useState<number>(0);

  async function obtenerAsignaturas() {
    const response = await fetch("http://localhost:5000/asignaturas");
    const data = await response.json();
    setListaAsignaturas(data.data);
  }

  async function guatdarAsignatura() {
    if (accion === 0) {
      const response = await fetch("http://localhost:5000/asignaturas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, cantidadhoras, estado }),
      });
    } else {
      const response = await fetch(`http://localhost:5000/asignaturas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, cantidadhoras, estado }),
      });
    }

    obtenerAsignaturas();

    setNombre("");
    setCantidadhoras("");
    setEstado("");
    setAccion(0);
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

  async function eliminarAsignatura(id: number) {
    const response = await fetch(`http://localhost:5000/asignaturas/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    obtenerAsignaturas();
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="📚 Nombre de la asignatura"
          value={nombre}
          onChangeText={setNombre}
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="⏱️  Cantidad de horas"
          value={cantidadhoras}
          onChangeText={setCantidadhoras}
          keyboardType="numeric"
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
            title={accion === 0 ? "➕ Guardar asignatura" : "✏️  Actualizar"}
            onPress={() => guatdarAsignatura()}
            color="#0066FF"
          />
        </View>
      </View>

      <FlatList
        data={listaAsignaturas}
        keyExtractor={(item) => item.idAsignatura.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemTitle}>📖 {item.nombre}</Text>
            <Text style={styles.itemDetails}>
              ID: {item.idAsignatura} | Horas: {item.cantidadhoras} | Estado:{" "}
              {item.estado}
            </Text>
            <View style={styles.buttonRow}>
              <Button
                title="✏️ Editar"
                onPress={() => editarAsignatura(item)}
                color="#00B74E"
              />
              <Button
                title="🗑️ Eliminar"
                onPress={() => eliminarAsignatura(item.idAsignatura)}
                color="#FF5252"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
