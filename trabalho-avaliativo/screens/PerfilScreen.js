import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

export default function PerfilScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  
  const [isEditing, setIsEditing] = useState(true);
  
  const [avatarUri, setAvatarUri] = useState(null);

  const handleSalvar = () => {
    if (!nome || !email) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }
    setIsEditing(false); 
  };

  // Função para voltar ao modo de edição.
  const handleEditar = () => {
    setIsEditing(true);
  };
  
  const handleTrocarAvatar = () => {
    setAvatarUri(`https://i.pravatar.cc/150?key=${Math.random()}`);
    Alert.alert("Avatar Trocado", "Um novo avatar aleatório foi gerado.");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleTrocarAvatar}>
          <Image
            style={styles.avatar}
            source={avatarUri ? { uri: avatarUri } : { uri: `https://i.pravatar.cc/150` }}
          />
          <Text style={styles.avatarText}>Toque para trocar o avatar</Text>
        </TouchableOpacity>

        {isEditing ? (
          // MODO DE EDIÇÃO
          <View style={styles.formContainer}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu nome"
              value={nome}
              onChangeText={setNome}
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="email@email.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Button title="Salvar Perfil" onPress={handleSalvar} />
          </View>
        ) : (
          <View style={styles.displayContainer}>
            <Text style={styles.displayLabel}>Nome:</Text>
            <Text style={styles.displayText}>{nome}</Text>
            
            <Text style={styles.displayLabel}>Email:</Text>
            <Text style={styles.displayText}>{email}</Text>

            <View style={{ marginTop: 20, width: '60%' }}>
              <Button title="Editar Perfil" onPress={handleEditar} />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#ddd',
    backgroundColor: '#e1e1e1',
  },
  avatarText: {
    color: 'blue',
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  displayContainer: {
    width: '100%',
    alignItems: 'center',
  },
  displayLabel: {
    fontSize: 16,
    color: '#555',
  },
  displayText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});