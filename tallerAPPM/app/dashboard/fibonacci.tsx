import { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const Fibonacci = () => {
  const [cantidad, setCantidad] = useState<number>(0);
  const [serie, setSerie] = useState<number[]>([]);

  const generarSerie = (n: number) => {
    let a = 0, b = 1;
    const result: number[] = [];
    for (let i = 0; i < n; i++) {
      result.push(a);
      [a, b] = [b, a + b];
    }
    setSerie(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serie de Fibonacci</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Cantidad de números"
        onChangeText={(t) => setCantidad(Number(t))}
      />
      <Button title="Generar serie" onPress={() => generarSerie(cantidad)} />
      <View style={styles.result}>
        {serie.map((num, i) => (
          <Text key={i} style={styles.item}>{num}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#000", marginBottom: 16, padding: 8 },
  result: { marginTop: 20 },
  item: { fontSize: 18, marginVertical: 4 },
});

export default Fibonacci;
