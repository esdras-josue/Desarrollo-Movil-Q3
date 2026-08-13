import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useMascota } from '../Provider/MascotaProvider'

export default function Cabecera() {

    const {nombre, estadoAnimo} = useMascota();

  return (
    <View style={styles.container}>
      <Image 
            source={require("../assets")}
            style={styles.imagen} 
        />

        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.estado}>{estadoAnimo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 25,
    },

    imagen: {
        width: 180,
        height: 180,
        marginBottom: 15,
    },

    nombre: {
        fontSize: 30,
        fontWeight: "bold",
    },

    estado: {
        fontSize: 20,
        marginTop: 5,
    },
});