import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button
        title="Registrar Produtos"
        onPress={() => router.push('/RegisterProduct')}
      />
      <Button
        title="Ver Produtos Registrados"
        onPress={() => router.push('/ViewProducts')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
