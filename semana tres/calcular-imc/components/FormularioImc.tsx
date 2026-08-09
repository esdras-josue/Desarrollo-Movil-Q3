import { View, Text, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function FormularioImc() {

 const [peso, setPeso] = useState<number>(65);
  const [altura, setAltura] = useState<number>(1.70);
  const [imc, setImc] = useState<number>(0.0);
  const [categoria, setCategoria] = useState<string>("");

  const aumentarPeso = () => {
    setPeso((p) => Number((p + 0.01).toFixed(2)));
  };
  const disminuirPeso = () => {
    setPeso((p) => Number((p - 0.01).toFixed(2)));
  };

  const aumentarAltura = () => {
    setAltura((p) => Number((p + 0.01).toFixed(2)));
  };
  const diminuirAltura = () => {
    setAltura((p) => Number((p - 0.01).toFixed(2)));
  };

  useEffect(() => {
    const resultado = peso / (altura * altura);
    setImc(resultado);

    if (resultado < 18.5) {
      setCategoria("Bajo peso");
    } else if (resultado < 25) {
      setCategoria("Normal");
    } else if (resultado < 30) {
      setCategoria("Sobrepeso");
    } else {
      setCategoria("Obesidad");
    }
  }, [peso, altura]);

  return (
    <View>
      <Text>FormularioImc</Text>

      <Text>Peso: {peso} KG</Text>
      <View>
        <Button title='Aumentar Peso' onPress={aumentarPeso}/>
        <Button title='Disminuir Peso' onPress={disminuirPeso}/>
      </View>

      <Text>Altura: {altura} CM</Text>
      <View>
        <Button title='Aumentar Altura' onPress={aumentarAltura}/>
        <Button title='Disminuir Altura' onPress={diminuirAltura}/>
      </View>

      <Text>Imc: {imc.toFixed(2)}</Text>

      <Text>Categoria: {categoria}</Text>
    </View>
  )
}