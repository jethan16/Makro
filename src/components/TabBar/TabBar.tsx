import useActiveTab, { activeTab } from '@/src/hooks/useActiveTab';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { ReactNode, useEffect, useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import TabBarButton from '../TabBarButton/TabBarButton';
import { TabsEnum } from '@/src/constants/enums';
import { Feather } from '@expo/vector-icons';


interface TabBarProps extends BottomTabBarProps {
    activeTab?: activeTab
};

const IconLookup: Record<string, (props?: any) => ReactNode> = {
    [TabsEnum.home]: (props) => <Feather name='home' size={24} {...props}/>,
    [TabsEnum.progress]: (props) => <Feather name='bar-chart' size={24} {...props}/>,
    [TabsEnum.log]: (props) => <Feather name='plus' size={24} {...props}/>,
    [TabsEnum.user]: (props) => <Feather name='user' size={24} {...props}/>,
    [TabsEnum.drawer]: (props) => <Feather name='menu' size={24} {...props}/>,
};

const TabBar = ({ state, descriptors, navigation, ...props }: TabBarProps) => {
    const { activeTab } = useActiveTab();
    const [routes, setRoutes] = useState<RouteProp<ParamListBase, string>[]>();

    useEffect(() => {
        setRoutes(state.routes.filter(route => IconLookup[route.name]))
    }, [])

    const onPress = (key: string, name: string, params: any, focused: boolean) => {
        const event = navigation.emit({
        type: 'tabPress',
        target: key,
        canPreventDefault: true,
        });

        if (!focused && !event.defaultPrevented) {
        navigation.navigate(name, params);
        }
    };

    const onLongPress = (key: string) => {
        navigation.emit({
        type: 'tabLongPress',
        target: key,
        });
    };

    return (
        <View style={activeTab === 'log' ? {display: 'none'} : TabStyles.Bar}>
           {
            routes?.map(({name, key, params}, index) => {
                const { options } = descriptors[key];
                const isFocused = state.index === index;

                return (
                    <TabBarButton 
                        onPress={() => onPress(key, name, params, isFocused)}
                        onLongPress={() => onLongPress(key)}
                        isFocused={isFocused}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        id={options.tabBarTestID}
                    >
                        {IconLookup[name]({
                             color: isFocused ? 'white' : 'black'
                         })}
                    </TabBarButton>
                )})
           }
        </View>
    );
}

export { TabBar }

const TabStyles = StyleSheet.create({
    Bar: {
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        marginHorizontal: 50,
        padding: 15,
        borderRadius: 35
    },
    Button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    }
})

// {
//     const { options } = descriptors[route.key];
//     const label =
//         options.tabBarLabel !== undefined
//         ? options.tabBarLabel
//         : options.title !== undefined
//         ? options.title
//         : route.name;

//     const isFocused = state.index === index;

//     const onPress = () => {
//         const event = navigation.emit({
//         type: 'tabPress',
//         target: route.key,
//         canPreventDefault: true,
//         });

//         if (!isFocused && !event.defaultPrevented) {
//         navigation.navigate(route.name, route.params);
//         }
//     };

//     const onLongPress = () => {
//         navigation.emit({
//         type: 'tabLongPress',
//         target: route.key,
//         });
//     };

//     return (
//         <Pressable
//             key={route.name}
//             style={TabStyles.Button}
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//         >
//             {IconLookup[route.name]({
//                 color: isFocused ? 'white' : 'black'
//             })}
//         </Pressable>
//     );
//     }