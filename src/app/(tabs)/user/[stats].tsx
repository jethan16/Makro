import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const stats = () => {
    const {stats} = useLocalSearchParams<{ stats: string} >()

    return (
        <View>
            <Text>Stats: {stats}</Text>
        </View>
    );
}

export default stats;