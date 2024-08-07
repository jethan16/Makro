import { activeTab } from '@/src/hooks/useActiveTab';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import {  ReactNode, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TabBarButton from '../TabBarButton/TabBarButton';
import { TabsEnum } from '@/src/constants/enums';
import { Feather } from '@expo/vector-icons';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';

interface TabBarProps extends BottomTabBarProps {
    activeTab?: activeTab
};

type RoutesInterface = Record<string, ((props?: any) => ReactNode)>

const IconLookup: RoutesInterface = {
    [TabsEnum.home]: (props) => <Feather name='home' size={24} {...props}/>,
    [TabsEnum.progress]: (props) => <Feather name='bar-chart' size={24} {...props}/>,
    [TabsEnum.log]: (props) => <Feather name='plus' size={24} {...props}/>,
    [TabsEnum.user]:  (props) => <Feather name='user' size={24} {...props}/>,
    [TabsEnum.drawer]:  (props) => <Feather name='menu' size={24} {...props}/>
};

const indicatorSize = 55;
const iconSize = 70;

const TabBar = ({ state, descriptors, navigation, ...props }: TabBarProps) => {
    const [routes, setRoutes] = useState<RouteProp<ParamListBase, string>[]>();
    const [activeIndicator, setActiveIndicator] = useState<boolean>(true);
    const tabPosX = useSharedValue(0);

    useEffect(() => {
        setRoutes(state.routes.filter(route => IconLookup[route.name]));
        getIndicatorPosition('home', 0);
    }, []);
    useEffect(() => {
        const activeRoute = state.history[state.history.length - 1].key.split('-')[0];
        if (routes) {
            const routeNames = routes.map(route => route.name);
            if (!routeNames.includes(activeRoute)) {
                setActiveIndicator(false)
            } else {
                setActiveIndicator(true)
            }
        }
    }, [state.history])


    const onPressHandler = (key: string, name: string, params: any, focused: boolean) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: key,
            canPreventDefault: true,
        });

        if (!focused && !event.defaultPrevented) {
            navigation.navigate(name, params);
        }
    };
    const onLongPressHandler = (key: string) => {
        navigation.emit({
            type: 'tabLongPress',
            target: key,
        });
    };
    const getIndicatorPosition = (name: string, index: number) => {
        if (name === TabsEnum.log || name === TabsEnum.drawer) return
        tabPosX.value = (iconSize * index)
    };

    return (
        <BlurView intensity={50}>
            <View style={TabStyles.Wrapper}>
                <View style={TabStyles.Bar}>
                    <Animated.View 
                        style={[TabStyles.Indicator, { left: tabPosX, backgroundColor: activeIndicator ? 'white' : 'transparent'}]} 
                    />
                    {
                        routes?.map(({name, key, params}, index) => {
                            const { options } = descriptors[key];
                            const isFocused = state.index === index;

                            return (
                                <TabBarButton 
                                    key={`${name}-${index}`}
                                    onPress={() => {
                                            onPressHandler(key, name, params, isFocused)
                                            getIndicatorPosition(name, index)
                                        }
                                    }
                                    onLongPress={() => onLongPressHandler(key)}
                                    isFocused={isFocused}
                                    accessibilityLabel={options.tabBarAccessibilityLabel}
                                    id={options.tabBarTestID}
                                    style={[TabStyles.Icon, name === TabsEnum.log ? {backgroundColor: '#5244E7'} : {backgroundColor: 'transparent'}]}
                                >
                                    {IconLookup[name]({color: name === TabsEnum.log ? 'white' : null})}
                                </TabBarButton>
                            )
                        })
                    }
                </View>
            </View>
        </BlurView>
    );
}

export { TabBar }

const TabStyles = StyleSheet.create({
    Wrapper: {
        position: 'absolute',
        bottom: 35,
        left: 0,
        right: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Bar: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 50,
    },
    Indicator: {
        position: 'absolute',
        width: indicatorSize,
        height: indicatorSize,
        borderRadius: 100,
        marginHorizontal: 17.5
    },
    Icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: 15,
        borderRadius: 40,
        color: 'white',
        height: iconSize,
        width: iconSize
    }
});
