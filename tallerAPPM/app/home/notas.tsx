import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function NotasIngreso() {
  const [nota, setNota] = useState<string>("");
  const [lista, setLista] = useState<number[]>([]);

  const agregarNota = () => {
    const valor = parseFloat(nota);
    if (!isNaN(valor) && valor >= 0 && valor <= 5 && /^\d(\.\d{1,2})?$/.test(nota)) {
      setLista([...lista, valor]);
      setNota("");
    } else {
      alert("La nota debe estar entre 0.00 y 5.00, máximo 2 decimales.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar Notas</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese sus notas"
        keyboardType="numeric"
        value={nota}
        onChangeText={setNota}
      />
      <Button title="Agregar nota" onPress={agregarNota} />
      <Button
        title="Calcular promedio"
        onPress={() =>
          router.push({ pathname: "/home/promedio", params: { notas: JSON.stringify(lista) } })
        }
      />
      <View style={styles.list}>
        {lista.map((n, i) => (
          <Text key={i}>Nota {i + 1}: {n.toFixed(2)}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#000", marginBottom: 16, padding: 8 },
  list: { marginTop: 20 }
});
