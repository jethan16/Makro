import { TabBar } from "@/src/components";
import { TabsEnum } from "@/src/constants/enums";
import useActiveTab, { TabTitles } from "@/src/hooks/useActiveTab";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Tabs, useNavigation, useRouter } from "expo-router";

type RootDrawerParamList = {
  Home: undefined;
  Settings: undefined;
  // Add other drawer screens here
  Tabs: undefined;
};

const TabsLayout = () => {
  const {setActiveTab} = useActiveTab()
  const router = useRouter();
  // const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();;
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props}/>}
    >
      <Tabs.Screen 
        name={TabsEnum.home} 
        options={{
          headerShown: false,
          
        }}
      />
      <Tabs.Screen 
        name={TabsEnum.progress} 
        options={{
          headerShown: false,
       
        }}
      />
      <Tabs.Screen 
        name={TabsEnum.log} 
        options={{
          tabBarStyle: { display: 'none'},
          headerShown: false
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            router.push('/log-item')
          }
        })}
      />
      <Tabs.Screen 
        name={TabsEnum.user} 
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen 
        name={TabsEnum.drawer} 
        options={{
          headerShown: false,
          title: 'drawer'
        }}
        listeners={({navigation}) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.toggleDrawer();
          }
        })}
      />
      {/* Hidden Routes */}
      <Tabs.Screen 
        name={TabsEnum.goals} 
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen 
        name={TabsEnum.trends} 
        options={{
          headerShown: false,
          tabBarButton: () => null
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;