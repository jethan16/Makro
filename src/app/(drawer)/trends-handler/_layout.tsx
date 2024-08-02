import { Stack } from "expo-router";

const TrendsLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }}/>
        </Stack>
    );
}

export default TrendsLayout;