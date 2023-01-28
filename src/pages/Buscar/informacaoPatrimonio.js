import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Exibir() {
const [numero, setNumero] = useState('');
const [descricao, setDescricao] = useState('');
const [localizacao, setLocalizacao] = useState('');
const [observacoes, setObservacoes] = useState('');

return (
<View style={styles.container}>
<Text style={styles.text}>Informações do Patrimônio</Text>
<Text>Número do Patrimônio: {numero}</Text>
<Text>Descrição: {descricao}</Text>
<Text>Localização: {localizacao}</Text>
<Text>Observações: {observacoes}</Text>
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
});

// Note: Para exibir as informações do patrimônio, você precisará adicionar lógica para buscar as informações 
// do patrimônio no banco de dados ou em outra fonte de dados e atribuir esses valores para as variáveis ​​de estado acima. 
// Além disso, você pode adicionar um botão para permitir que o usuário salve as observações sobre o patrimônio.