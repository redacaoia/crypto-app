import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';
import { Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ActivityIndicator size="large" color="black" />
        {/*   <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Home" /> */}
      </Container>
    </>
  );
}
