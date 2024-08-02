import { Stack } from "expo-router";
import { View } from "react-native";
import TabsLayout from "../(tabs)/_layout";

const FAQsLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }}/>
        </Stack>
    );
}

export default FAQsLayout;