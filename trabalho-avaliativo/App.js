import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ResumoScreen from './screens/ResumoScreen';
import NovoGastoScreen from './screens/NovoGastoScreen';
import HistoricoScreen from './screens/HistoricoScreen';
import PerfilScreen from './screens/PerfilScreen';
import NovoGanhoScreen from './screens/NovoGanhoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [transacoes, setTransacoes] = useState([]);

  const adicionarTransacao = (transacao) => {
    setTransacoes(transacoesAtuais => [...transacoesAtuais, transacao]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Resumo">
          {() => <ResumoScreen transacoes={transacoes} />}
        </Tab.Screen>

        <Tab.Screen name="Novo Gasto">
          {props => <NovoGastoScreen {...props} adicionarTransacao={adicionarTransacao} />}
        </Tab.Screen>

        <Tab.Screen name="Novo Ganho">
          {props => <NovoGanhoScreen {...props} adicionarTransacao={adicionarTransacao} />}
        </Tab.Screen>

        <Tab.Screen name="Histórico">
          {() => <HistoricoScreen transacoes={transacoes} />}
        </Tab.Screen>
        
        <Tab.Screen name="Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}