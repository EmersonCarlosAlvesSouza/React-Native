import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Buscar() {
const [inputValue, onChangeText] = React.useState('');
const [notFound, setNotFound] = React.useState(false);

function handleSearch() {
// lógica de busca
const patrimonio = buscarPatrimonio(inputValue);
if (!patrimonio) {
setNotFound(true);
} else {
setNotFound(false);
// continuar lógica de exibição do patrimônio encontrado
}
}

return (
<View style={styles.container}>
<Text style={styles.text}>Digite o número ou use o qrcode:</Text>
<TextInput
style={styles.input}
onChangeText={text => onChangeText(text)}
value={inputValue}
/>
<Button 
     title="Buscar"
     onPress={handleSearch}
   />
{notFound && <Text style={styles.notFound}>Patrimônio não encontrado</Text>}
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
text: {
fontSize: 15,
fontWeight: 'bold',
marginBottom: 20,
},
input: {
width: '80%',
alignItems: 'center',
justifyContent: 'center',
height: 40,
borderColor: 'gray',
borderWidth: 1,
marginBottom: 20,
padding: 10,
},
notFound: {
color: 'red',
marginTop: 10,
textAlign: 'center',
},
});