import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useMascota } from '../Provider/MascotaProvider'

export default function Bitacora() {
    const { bitacora} = useMascota();

  return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Bitácora
            </Text>

            {bitacora.length === 0 ? (
                <Text style={styles.vacia}>
                    Todavía no ha ocurrido nada.
                </Text>
            ) : (
                bitacora.map((entrada, index) => (
                    <View
                        key={`${entrada.hora}-${index}`}
                        style={styles.entrada}
                    >
                        <Text style={styles.hora}>
                            {entrada.hora}
                        </Text>

                        <Text style={styles.mensaje}>
                            {entrada.mensaje}
                        </Text>
                    </View>
                ))
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },

    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },

    entrada: {
        padding: 12,
        marginBottom: 8,
        borderBottomWidth: 1,
    },

    hora: {
        fontSize: 13,
        fontWeight: "bold",
    },

    mensaje: {
        fontSize: 16,
        marginTop: 3,
    },

    vacia: {
        fontSize: 15,
    },
});