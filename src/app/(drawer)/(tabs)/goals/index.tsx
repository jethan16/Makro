import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

const Goals = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Goal Screen</Text>
        </View>
    );
}

export default Goals;