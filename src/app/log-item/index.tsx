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
                title="Go Home"
                onPress={() => {
                    router.push('(tabs)/home');
                }}
            />
        </View>
    );
}

export default LogItem;