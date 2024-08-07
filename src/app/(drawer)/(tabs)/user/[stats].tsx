import ViewLayout from "@/src/components/ViewLayout/ViewLayout";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

const stats = () => {
    const {stats} = useLocalSearchParams<{ stats: string} >()

    return (
        <ViewLayout>
            <Text>Stats: {stats}</Text>
        </ViewLayout>
    );
}

export default stats;