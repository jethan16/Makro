import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
   <GestureHandlerRootView style={{flex: 1}}>
      <Drawer>
        <Drawer.Screen 
          name='index'
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({ size, color }) => <Ionicons name='home-outline' size={size} color={color}/>
          }}
        />
        <Drawer.Screen 
          name='user'
          options={{
            drawerLabel: 'Profile',
            title: 'Profile',
            drawerIcon: ({ size, color }) => <Ionicons name="person-outline" size={size} color={color}/>
          }}
        />
      </Drawer>
   </GestureHandlerRootView>
  );
}
