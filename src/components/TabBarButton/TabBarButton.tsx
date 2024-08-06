import { ReactNode, useEffect } from "react";
import { Pressable, PressableProps, } from "react-native";
import { useSharedValue, withSpring } from "react-native-reanimated";

interface TabBarButtonProps extends PressableProps {
    onPress: () => void;
    onLongPress: () => void;
    isFocused: boolean;
    id: string | undefined; 
    children: ReactNode;
}

const TabBarButton = ({isFocused, id, children, ...rest}: TabBarButtonProps) => {

    const scale = useSharedValue(0);

    useEffect(() => {
        const scaleValue = isFocused ? 1 : 0;
        scale.value = withSpring(scaleValue, { duration: 350});

    }, [scale, isFocused]);


    return (
        <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            testID={id}
            {...rest}
        >
            {children}
        </Pressable>
    );
}

export default TabBarButton;