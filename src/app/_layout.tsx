import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { createContext, useContext, useState } from 'react';
import { activeTab, TabTitles } from '../hooks/useActiveTab';

const StackLayout = () => {
  const [activeTab, setActiveTab] = useState<activeTab>(TabTitles.home)

  const GenericContext_DEFAULT = {
    activeTab: TabTitles.home,
    setActiveTab: (tab: activeTab) => {}
  }
  const GenericContext = createContext(GenericContext_DEFAULT);

  return (
    <GenericContext.Provider value={{activeTab, setActiveTab}}>
      <Stack>
        <Stack.Screen name='(drawer)' options={{headerShown: false}}/>
        <Stack.Screen name='log-item' options={{headerShown: false}}/>
      </Stack>
    </GenericContext.Provider>
  );
}

export default StackLayout;
