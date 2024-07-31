import { TabBar } from "@/src/components";
import useActiveTab, { TabTitles } from "@/src/hooks/useActiveTab";
import { Tabs, useRouter } from "expo-router";

const TabsLayout = () => {
  const {setActiveTab} = useActiveTab()
  const router = useRouter();

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props}/>}
    >
      <Tabs.Screen 
        name={TabTitles.home} 
        options={{
          headerShown: false,
          
        }}
        listeners={() => ({
          tabPress: () => setActiveTab(TabTitles.home)
        })}
      />
      <Tabs.Screen 
        name={TabTitles.progress} 
        options={{
          headerShown: false,
       
        }}
        listeners={() => ({
          tabPress: () => setActiveTab(TabTitles.progress)
        })}
      />
      <Tabs.Screen 
        name={TabTitles.log} 
        options={{
          tabBarStyle: { display: 'none'}
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            setActiveTab(TabTitles.log);
            router.push('/log')
          }
        })}
      />
      <Tabs.Screen 
        name={TabTitles.user} 
        options={{
          headerShown: false,
        }}
        listeners={() => ({
          tabPress: () => setActiveTab(TabTitles.user)
        })}
      />
      <Tabs.Screen 
        name={TabTitles.drawer} 
        listeners={({navigation}) => (
          {
            tabPress: (e) => {
              e.preventDefault();
              navigation.toggleDrawer();
              setActiveTab(TabTitles.drawer)
            }
          }
        )}
      />
    </Tabs>
  );
}

export default TabsLayout;