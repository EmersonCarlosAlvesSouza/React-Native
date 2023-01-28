import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Adicionar() {
  const [numero, setNumero] = useState('');
  const [descricao, setDescricao] = useState('');
  const [localizacao, setLocalizacao] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Informações do Patrimônio</Text>
      <Text>Número do Patrimônio:</Text>
      <TextInput 
        style={styles.input}
        onChangeText={text => setNumero(text)}
        value={numero}
      />
      <Text>Descrição:</Text>
      <TextInput 
        style={styles.inputDescricao}
        onChangeText={text => setDescricao(text)}
        value={descricao}
        multiline={true}
        numberOfLines={4}
      />
      
      <Button 
        title="Concluir"
        onPress={() => {
          // adicionar lógica de salvar patrimônio
          // botão q vai ler a proxima tela
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    width: '100%'
  },
  inputDescricao: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    height: 100
  }
});
