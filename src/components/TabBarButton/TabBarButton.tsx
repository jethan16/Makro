import { Pressable, StyleSheet } from "react-native";

const TabBarButton = ({onPress, onLongPress, isFocused, accessibilityLabel, id, children}: any) => {
    return (
        <Pressable
            style={ButtonStyles.Button}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={accessibilityLabel}
            testID={id}
            onPress={() => onPress()}
            onLongPress={() => onLongPress()}
        >
            {children}
        </Pressable>
    );
}

export default TabBarButton;

const ButtonStyles = StyleSheet.create({
    Button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    }
})