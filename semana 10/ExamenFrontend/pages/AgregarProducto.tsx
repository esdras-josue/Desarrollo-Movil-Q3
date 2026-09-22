import {
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { useContextProducto } from "../Provider/ProductoProvider";
import { Producto } from "../models/Producto";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function AgregarProducto() {
  const { guardarProducto } = useContextProducto();

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [disponible, setDisponible] = useState(true);

  const [mostrarCamara, setMostrarCamara] = useState(false);
    const [foto, setFoto] = useState<string | null>(null);

    const [permiso, solicitarPermiso] = useCameraPermissions();

    const cameraRef = useRef<CameraView>(null);


    const abrirCamara = async () => {

        if (!permiso?.granted) {

            const respuesta = await solicitarPermiso();

            if (!respuesta.granted) {

                Alert.alert(
                    "Permiso requerido",
                    "Necesitas permitir el acceso a la cámara"
                );

                return;
            }

        }

        setMostrarCamara(true);
    };


    const tomarFoto = async () => {

        if (cameraRef.current) {

            const resultado = await cameraRef.current.takePictureAsync();

            if (resultado) {

                setFoto(resultado.uri);

                setMostrarCamara(false);
            }

        }

    };



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
      fotografia_url: foto,
    };

    await guardarProducto(nuevoProducto);

    Alert.alert("Producto guardado");

    setNombre("");
    setDescripcion("");
    setPrecio("");
    setCategoria("");
    setDisponible(true);
    setFoto(null);
  };

  if (mostrarCamara) {
    return (
        <View style={styles.camaraContainer}>

            <CameraView 
                ref={cameraRef}
                style={styles.camara}
                facing="back"
            />

            <TouchableOpacity
                style={styles.botonFoto}
                onPress={tomarFoto}
            >

                <Text style={styles.textoBoton}>
                    Tomar Foto
                </Text>

            </TouchableOpacity>

        </View>
    );
  }



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

      <TouchableOpacity style={styles.botonCamara} onPress={abrirCamara}>

        <Text style={styles.textoBoton}>
            Tomar Fotografia
        </Text>

      </TouchableOpacity>

      {foto && (
        <Image 
            source={{ uri: foto}}
            style={styles.imagen}
        />
      )}

      <TouchableOpacity style={styles.botonGuardar} onPress={guardar}>
        <Text style={styles.textoBoton}>Guardar Producto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white"
    },

    titulo: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginTop: 5,
        marginBottom: 15
    },

    estadoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },

    botonCamara: {
        backgroundColor: "#555",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 15
    },

    botonGuardar: {
        backgroundColor: "#2196F3",
        padding: 15,
        borderRadius: 8,
        alignItems: "center"
    },

    textoBoton: {
        color: "white",
        fontWeight: "bold"
    },

    imagen: {
        width: "100%",
        height: 200,
        marginBottom: 15,
        borderRadius: 8
    },

    camaraContainer: {
        flex: 1
    },

    camara: {
        flex: 1
    },

    botonFoto: {
        backgroundColor: "#2196F3",
        padding: 20,
        alignItems: "center"
    }

});