import { Stack } from "expo-router";


const ProgressLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }}/>
        </Stack>
    );
}

export default ProgressLayout;