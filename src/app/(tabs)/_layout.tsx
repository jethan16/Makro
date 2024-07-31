import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs, useNavigation } from "expo-router";
import { View } from "react-native";

const TabsLayout = () => {
  const navigation = useNavigation()

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
        options={{
          headerShown: false,
          headerTitle: 'Drawer',
          title: 'Drawer'
        }}
        // listeners={({navigation}) => (
        //   {
        //     tabPress: (e) => {
        //       e.preventDefault();
        //       navigation.toggleDrawer()
        //     }
        //   }
        // )}
      />
    </Tabs>
  );
}

export default TabsLayout;