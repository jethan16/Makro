import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
    return (
        <Drawer
            drawerContent={() => null}
        >
            <Drawer.Screen name='(tabs)' options={{headerShown: false}}/>
        </Drawer>
    );
}

export default DrawerLayout;