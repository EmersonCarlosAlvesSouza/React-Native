import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Verificar() {
  const [numero, setNumero] = useState('');
  const [patrimonio, setPatrimonio] = useState(null);

  function handleVerificar() {
    // aqui você pode fazer uma chamada à uma API para buscar o patrimônio com o número fornecido
    // por exemplo:
    // fetch(`https://minhaapi.com/patrimonios/${numero}`)
    //   .then(response => response.json())
    //   .then(data => setPatrimonio(data))
    //   .catch(error => console.log(error))
    // no exemplo acima, "data" seria o objeto do patrimônio retornado pela API
    // no lugar disso, vamos simular a busca com um objeto fixo:
    if (numero === '123') {
      setPatrimonio({
        numero: '123',
        descricao: 'Patrimônio exemplo',
        localizacao: 'Localização exemplo',
      });
    } else {
      setPatrimonio(null);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verificar Patrimônio</Text>
      <TextInput
        style={styles.input}
        placeholder="Número do patrimônio"
        value={numero}
        onChangeText={setNumero}
      />
      <Button title="Verificar" onPress={handleVerificar} />
      {patrimonio ? (
        <View style={styles.patrimonioContainer}>
          <Text style={styles.patrimonioText}>Número: {patrimonio.numero}</Text>
          <Text style={styles.patrimonioText}>Descrição: {patrimonio.descricao}</Text>
          <Text style={styles.patrimonioText}>Localização: {patrimonio.localizacao}</Text>
        </View>
      ) : (
        <Text style={styles.notFoundText}>Patrimônio não encontrado</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  patrimonioContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    },
    patrimonioText: {
    fontSize: 20,
    marginBottom: 10,
    },
    notFoundText: {
    fontSize: 20,
    color: 'red',
    marginTop: 20,
    },
    });
