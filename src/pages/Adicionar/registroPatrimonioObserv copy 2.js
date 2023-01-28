import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default function Adicionar() {
const [numero, setNumero] = useState('');
const [descricao, setDescricao] = useState('');
const [localizacao, setLocalizacao] = useState('');

return (
<View style={styles.container}>
<Text style={styles.text}>Adicionar Patrimônio</Text>
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
<View style={styles.fotoContainer}>
<Text>Adicionar foto:</Text>
<View style={styles.addFotoContainer}>
<Button

title="Adicionar foto"

onPress={() => {
// código para abrir a câmera
}}
style={styles.addFotoButton}

/>
</View>
</View>
<View style={styles.buttonContainer}>
<Button
title="Registrar"
color="#8A2BE2"
onPress={() => {
// código para registrar as informações do patrimônio
}}
style={styles.registerButton}
/>
</View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
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
},
fotoContainer: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
marginBottom: 20
},
addFotoContainer: {
alignItems: 'flex-end',
flex: 1
},
addFotoButton: {
},
buttonContainer: {
alignItems: 'center'
},
registerButton: {
borderWidth: 2,
borderRadius: 5,
padding: 10,
alignSelf: 'center',
marginTop: 20,
width: '50%'
}
});
