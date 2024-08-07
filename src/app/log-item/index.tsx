import ViewLayout from "@/src/components/ViewLayout/ViewLayout";
import { useRouter } from "expo-router";
import { Button } from "react-native";

const LogItem = () => {
    const router = useRouter()
    return (
        <ViewLayout
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
        </ViewLayout>
    );
}

export default LogItem;