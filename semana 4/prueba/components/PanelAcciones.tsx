import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useMascota } from '../Provider/MascotaProvider'

export default function PanelAcciones() {

    const {alimentar, jugar, descansar, reiniciar, puedeJugar} = useMascota();
  return (
    <View style={styles.container}>
      <Button 
        title='Alimentar'
        onPress={alimentar}
      />

      <Button
        title='Jugar'
        onPress={jugar}
        disabled={!puedeJugar} 
      />

      <Button
        title='Descanzar'
        onPress={descansar} 
      />

      <Button 
        title='Reiniciar'
        onPress={reiniciar}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
        marginBottom: 25,
    },
});