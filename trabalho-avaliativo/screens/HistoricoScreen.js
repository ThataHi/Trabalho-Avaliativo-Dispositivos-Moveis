import { View, Text, FlatList, StyleSheet } from 'react-native';

const GastoCard = ({ item }) => {
  const corDoValor = item.tipo === 'ganho' ? 'green' : 'red';
  return (
    <View style={styles.card}>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={[styles.valor, { color: corDoValor }]}>
        {item.tipo === 'ganho' ? '+' : '-'} R$ {item.valor.toFixed(2)}
      </Text>
      <Text style={styles.categoria}>Categoria: {item.categoria}</Text>
    </View>
  );
};

export default function HistoricoScreen({ transacoes }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={transacoes}
        renderItem={({ item }) => <GastoCard item={item} />}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma transação registrada.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        elevation: 2,
    },
    descricao: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    valor: {
        fontSize: 18,
        marginTop: 5,
    },
    categoria: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
        color: '#666',
    }
});