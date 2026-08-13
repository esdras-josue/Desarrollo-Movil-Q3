import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useMascota } from '../Provider/MascotaProvider'

export default function Indicadores() {
    const{indicadores} = useMascota();

   return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Indicadores
            </Text>

            {indicadores.map(indicador => (
                <View
                    key={indicador.nombre}
                    style={styles.indicador}
                >
                    <Text style={styles.nombre}>
                        {indicador.nombre}
                    </Text>

                    <Text style={styles.valor}>
                        {indicador.valor}%
                    </Text>
                </View>
            ))}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 25,
    },

    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },

    indicador: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        marginBottom: 8,
        borderRadius: 10,
        borderWidth: 1,
    },

    nombre: {
        fontSize: 17,
        textTransform: "capitalize",
    },

    valor: {
        fontSize: 17,
        fontWeight: "bold",
    },
});