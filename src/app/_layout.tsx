import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';

const StackLayout = () => {

  return (
      <Stack>
        <Stack.Screen name='(drawer)' options={{headerShown: false}}/>
      </Stack>
  );
}

export default StackLayout;
