import { Stack } from "expo-router";

const GoalsLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }}/>
        </Stack>
    );
}

export default GoalsLayout;