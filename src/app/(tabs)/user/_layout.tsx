import { Stack } from 'expo-router';

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen 
                name='profile'
                options={{
                    headerShown: false,
                    title: 'Profile'
                }}
            />
            <Stack.Screen 
                name='[stats]'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='settings'
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    );
}

export default _layout;

