import useActiveTab, { activeTab } from '@/src/hooks/useActiveTab';
import { Feather, Ionicons } from '@expo/vector-icons';
import { BottomTabBarButtonProps, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { getBackgroundColorAsync } from 'expo-system-ui';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

const IconLookup: Record<string, (props?: any) => ReactNode> = {
    home: (props) => <Ionicons name='home' size={24} {...props}/>,
    progress: (props) => <Feather name='bar-chart' size={24} {...props}/>,
    log: (props) => <Feather name='plus' size={24} {...props}/>,
    user: (props) => <Feather name='user' size={24} {...props}/>,
    drawer: (props) => <Feather name='menu' size={24} {...props}/>,
}

interface TabBarProps extends BottomTabBarProps {
    activeTab?: activeTab
}

const TabBar = ({ state, descriptors, navigation, ...props }: TabBarProps) => {
    const {activeTab} = useActiveTab();

    // useEffect(() => {
    //     console.log('activeTab', activeTab)
    // }, [activeTab])

    return (
        <View style={activeTab === 'log' ? {display: 'none'} : TabStyles.Bar}>
            {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
                options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
                const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
                }
            };

            const onLongPress = () => {
                navigation.emit({
                type: 'tabLongPress',
                target: route.key,
                });
            };

            return (
                <Pressable
                    key={route.name}
                    style={TabStyles.Button}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                >
                    {IconLookup[route.name]({
                        color: isFocused ? 'white' : 'black'
                    })}
                </Pressable>
            );
            })}
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