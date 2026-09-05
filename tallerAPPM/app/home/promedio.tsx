import { useLocalSearchParams } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function NotasPromedio() {
  const { notas } = useLocalSearchParams<{ notas: string }>();
  const lista = notas ? JSON.parse(notas) : [];

  const promedio = lista.length > 0
    ? (lista.reduce((acc: number, n: number) => acc + n, 0) / lista.length).toFixed(2)
    : "0.00";

  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Promedio de Notas</Text>
      {lista.length > 0 ? (
        <Text style={styles.result}>El promedio es: {promedio}</Text>
      ) : (
        <Text style={styles.result}>No se han ingresado notas</Text>
      )}
      <Button title="Volver al menú principal" onPress={() => router.push("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 20 },
  result: { fontSize: 20, fontWeight: "bold", marginBottom: 20 }
});
