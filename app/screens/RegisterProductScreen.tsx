import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ViewProductsScreen() {
  const products = [
    { id: 1, name: 'Camiseta', price: 'R$ 29,90' },
    { id: 2, name: 'Calça Jeans', price: 'R$ 99,90' },
  ];

  return (
    <View style={styles.container}>
      {products.map(product => (
        <View key={product.id} style={styles.productItem}>
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
