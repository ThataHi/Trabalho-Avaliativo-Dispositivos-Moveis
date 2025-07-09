import React, { useState } from 'react';
import { View, Button, Text, TextInput, StyleSheet, Alert } from 'react-native';

export default function NovoGastoScreen({ navigation, adicionarTransacao }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleAdicionarGasto = () => {
    if (!descricao || !valor) {
      Alert.alert('Erro', 'Por favor, preencha a descrição e o valor.');
      return;
    }
    const novaTransacao = {
      id: Date.now().toString(),
      descricao,
      valor: parseFloat(valor),
      categoria: categoria || 'Geral',
      tipo: 'perda',
    };
    
    adicionarTransacao(novaTransacao);
    
    setDescricao('');
    setValor('');
    setCategoria('');
    navigation.navigate('Histórico');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Descrição do Gasto:</Text>
        <TextInput
            placeholder="Ex: Almoço, Aluguel"
            value={descricao}
            onChangeText={setDescricao}
            style={styles.input}
        />
        <Text style={styles.label}>Valor (R$):</Text>
        <TextInput
            placeholder="Ex: 50.00"
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric"
            style={styles.input}
        />
        <Text style={styles.label}>Categoria (Opcional):</Text>
        <TextInput
            placeholder="Ex: Alimentação"
            value={categoria}
            onChangeText={setCategoria}
            style={styles.input}
        />
        <Button
            title="Adicionar Despesa"
            color="#ff4500"
            onPress={handleAdicionarGasto}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 15,
        fontSize: 16,
    },
});