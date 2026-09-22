import {
  View,
  Text,
  Alert,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useContextProducto } from "../Provider/ProductoProvider";

export default function MostrarProductos() {
  const { listaProductos, getProductos, eliminarProducto } =
    useContextProducto();

  useEffect(() => {
    getProductos();
  }, []);

  const eliminar = (id: number) => {
    Alert.alert(
      "Eliminar producto",
      "Seguro que deseas eliminar el producto?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: async () => {
            await eliminarProducto(id);
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Productos</Text>

      <FlatList
        data={listaProductos}
        keyExtractor={(item) => item.id!.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.fotografia_url && (
              <Image
                source={{
                  uri: item.fotografia_url,
                }}
                style={styles.imagen}
              />
            )}

            <View style={styles.informacion}>
              <Text style={styles.nombre}>{item.nombre}</Text>

              <Text>{item.descripcion}</Text>

              <Text style={styles.precio}>L. {item.precio}</Text>

              <Text>Categoria: {item.categoria}</Text>

              <Text>Estado: {item.estado}</Text>

              <View style={styles.botones}>
                <TouchableOpacity style={styles.botonDetalle}>
                  <Text style={styles.textoBoton}>Detalle</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.botonEliminar}
                  onPress={() => {
                    if (item.id !== undefined) {
                      eliminar(item.id);
                    }
                  }}
                >
                  <Text style={styles.textoBoton}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
  },

  imagen: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },

  informacion: {
    gap: 5,
  },

  nombre: {
    fontSize: 20,
    fontWeight: "bold",
  },

  precio: {
    fontSize: 18,
    fontWeight: "bold",
  },

  botones: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  botonDetalle: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 6,
    width: "48%",
    alignItems: "center",
  },

  botonEliminar: {
    backgroundColor: "#e53935",
    padding: 10,
    borderRadius: 6,
    width: "48%",
    alignItems: "center",
  },

  textoBoton: {
    color: "white",
    fontWeight: "bold",
  },
});
