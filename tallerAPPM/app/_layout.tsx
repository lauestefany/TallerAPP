import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Menú Principal" }} />
      <Stack.Screen name="perfil" options={{ title: "Perfil" }} />

      {/* Dashboard */}
      <Stack.Screen name="dashboard/fibonacci" options={{ title: "Serie Fibonacci" }} />
      <Stack.Screen name="dashboard/factorial" options={{ title: "Factorial" }} />
      <Stack.Screen name="dashboard/tablas" options={{ title: "Tablas de multiplicar" }} />

      {/* Home */}
      <Stack.Screen name="home/notas" options={{ title: "Notas" }} />
      <Stack.Screen name="home/promedio" options={{ title: "Promedio de Notas" }} />

      {/* Información */}
      <Stack.Screen name="info" options={{ title: "Información" }} />
    </Stack>
  );
}

