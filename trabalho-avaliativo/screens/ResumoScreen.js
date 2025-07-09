import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResumoScreen({ transacoes }) {
  const { totalReceitas, totalDespesas, saldoFinal } = useMemo(() => {
    if (!transacoes) {
        return { totalReceitas: 0, totalDespesas: 0, saldoFinal: 0 };
    }

    const totalReceitas = transacoes
      .filter(t => t.tipo === 'ganho')
      .reduce((acc, t) => acc + t.valor, 0);

    const totalDespesas = transacoes
      .filter(t => t.tipo === 'perda')
      .reduce((acc, t) => acc + t.valor, 0);

    const saldoFinal = totalReceitas - totalDespesas;
    return { totalReceitas, totalDespesas, saldoFinal };
  }, [transacoes]);

  const corSaldo = saldoFinal >= 0 ? 'green' : 'red';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo Financeiro</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Total de Receitas</Text>
        <Text style={[styles.cardValue, { color: 'green' }]}>
            R$ {totalReceitas.toFixed(2)}
        </Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Total de Despesas</Text>
        <Text style={[styles.cardValue, { color: 'red' }]}>
            R$ {totalDespesas.toFixed(2)}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Saldo Final</Text>
        <Text style={[styles.cardValue, { color: corSaldo }]}>
            R$ {saldoFinal.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardLabel: {
    fontSize: 16,
    color: '#666',
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  }
});