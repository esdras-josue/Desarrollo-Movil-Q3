import { View, Text, Switch, StyleSheet } from 'react-native'
import React from 'react'
import { useMascota } from '../Provider/MascotaProvider'

export default function ModoNoche() {

    const {modoNoche, alternarModoNoche} = useMascota();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>ModoNoche</Text>
      <Switch
        value={modoNoche}
        onValueChange={alternarModoNoche} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginBottom: 20,
    },

    texto: {
        fontSize: 18,
        fontWeight: "bold",
    },
});