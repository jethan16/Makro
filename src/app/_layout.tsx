import { Stack } from 'expo-router';
export default function Index() {
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: true }}/>
      </Stack>
  );
}
