import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Adicionar() {
const [inputValue, onChangeText] = React.useState('');

return (
<View style={styles.container}>
<Text style={styles.successText}>Cadastrado com sucesso!</Text>
<View style={styles.buttonContainer}>
<Button
title="Retornar"
color="#8a2be2"
onPress={() => {}}
style={styles.button}
/>
<View style={styles.space} />
<Button
title="Observações"
color="#ffa500"
onPress={() => {}}
style={styles.button}
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
},
successText: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 20,
},
buttonContainer: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 20,
},
space: {
width: 10,
},
});