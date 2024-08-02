import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

const Goals = () => {
    const router = useRouter()
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Trends Screen</Text>
        </View>
    );
}

export default Goals;