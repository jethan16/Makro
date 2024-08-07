import { useRouter } from "expo-router";
import { Button, View } from "react-native";

const LogItem = () => {
    const router = useRouter()
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button 
                title="Go Back"
                onPress={() => {
                    router.back()
                }}
            />
        </View>
    );
}

export default LogItem;