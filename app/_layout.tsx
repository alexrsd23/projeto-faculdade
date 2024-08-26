import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="HomeScreen" options={{ title: 'Gerenciamento de Estoque' }} />
      <Stack.Screen name="RegisterProductScreen" options={{ title: 'Registrar Produto' }} />
      <Stack.Screen name="ViewProductsScreen" options={{ title: 'Produtos Registrados' }} />
    </Stack>
  );
}
