import { View, Text, TextInput, Button, Image, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Medicamento } from "../Interfaces/Medicamento";


export default function FormMedControl() {
  const [guardarMedicamento, setGuardarMedicamento] = useState<Medicamento[]>([]);
  const [nombre, setNombre] = useState("");
  const [dosis, setDosis] = useState("");
  const [hora, setHora] = useState("");
  const [foto, setFoto] = useState<string | null>(null);

  const tomarFoto = async () => {
    const permiso = await ImagePicker.requestCameraPermissionsAsync();

    if (!permiso.granted) {
      alert("Necesitas permitir el acceso a la camara");
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  };

  const guardar = () => {
    const medicamento = {
      nombre,
      dosis,
      hora,
      foto,
    };

    setGuardarMedicamento([...guardarMedicamento, medicamento]);
    alert("Se guardo correctamente");

    setNombre("");
    setDosis("");
    setHora("");
    setFoto(null);

    console.log(medicamento);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar medicamento</Text>

      <Text style={styles.label}>Nombre</Text>

      <TextInput
        style={styles.input}
        placeholder="Escriba el nombre del medicamento"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Dosis del medicamento</Text>

      <TextInput
        style={styles.input}
        placeholder="Ej. 500 mg"
        value={dosis}
        onChangeText={setDosis}
      />

      <Text style={styles.label}>Hora</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingrese la hora"
        value={hora}
        onChangeText={setHora}
      />

      <View style={styles.buttonContainer}>
        <Button title="Tomar foto del medicamento" onPress={tomarFoto} />
      </View>

      {foto && (
        <View style={styles.imageContainer}>
          <Text style={styles.photoText}>Foto del medicamento</Text>

          <Image source={{ uri: foto }} style={styles.image} />
        </View>
      )}

      <View style={styles.saveButton}>
        <Button title="Guardar" onPress={guardar} />
      </View>

      <FlatList 
        data={guardarMedicamento}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item}) => (
            <View>
                <Text>Listado de medicamentos</Text>
                <Text>Nombre: {item.nombre}</Text>
                <Text>Dosis: {item.dosis}</Text>
                <Text>Hora: {item.hora}</Text>

                {item.foto && (
                    <Image 
                        source={{ uri: item.foto}}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
                )}
            </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 60,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
  },

  buttonContainer: {
    marginTop: 25,
    borderRadius: 10,
    overflow: "hidden",
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 25,
  },

  photoText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
  },

  saveButton: {
    marginTop: 30,
    borderRadius: 10,
    overflow: "hidden",
  },
});
