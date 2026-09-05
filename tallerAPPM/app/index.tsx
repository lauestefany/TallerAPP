import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú Principal</Text>

      <Button
        title="Serie Fibonacci"
        onPress={() => router.push("/dashboard/fibonacci")}
      />
      <Button
        title="Factorial"
        onPress={() => router.push("/dashboard/factorial")}
      />
      <Button
        title="Tablas de multiplicar"
        onPress={() => router.push("/dashboard/tablas")}
      />
      <Button
        title="Notas"
        onPress={() => router.push("/home/notas")}
      />
      <Button
        title="Información"
        onPress={() => router.push("/info")}
      />
      <Button
        title="Perfil"
        onPress={() => router.push("/perfil")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});
