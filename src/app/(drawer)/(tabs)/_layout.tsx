import { DrawerToggleButton } from "@react-navigation/drawer";
import { useNavigationState } from "@react-navigation/native";
import { Tabs, useNavigation } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name='home/index' 
        options={{
          headerShown: false,
          headerTitle: 'Home',
          title: 'Home'
        }}
      />
      <Tabs.Screen 
        name='progress/index' 
        options={{
          headerShown: false,
          headerTitle: 'Progress',
          title: 'Progress'
        }}
      />
      <Tabs.Screen 
        name='log' 
        options={{
          headerShown: false,
          headerTitle: 'Log',
          title: 'Log',
          tabBarStyle: { display: 'none'}
        }}
      />
      <Tabs.Screen 
        name='user' 
        options={{
          headerShown: false,
          headerTitle: 'User',
          title: 'User'
        }}
      />
      <Tabs.Screen 
        name='drawer' 
        listeners={({navigation}) => (
          {
            tabPress: (e) => {
              e.preventDefault();
              navigation.toggleDrawer()
            }
          }
        )}
      />
    </Tabs>
  );
}

export default TabsLayout;