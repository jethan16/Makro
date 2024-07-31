import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
    return (
        <Drawer>
            <Drawer.Screen 
                name='index' 
                options={{
                    headerShown: false
                }}
            />
        </Drawer>
    );
}

export default DrawerLayout;
