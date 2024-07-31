import { Stack } from "expo-router";


const Log = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }}/>
        </Stack>
    );
}

export default Log;