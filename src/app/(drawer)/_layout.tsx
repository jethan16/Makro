import { DrawerEnums, TabsEnum } from "@/src/constants/enums";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
    const router = useRouter();
    return (
        <Drawer
        >
            <Drawer.Screen 
                name={DrawerEnums.tabs} 
                options={{
                    headerShown: false,
                    drawerItemStyle: {display: 'none'}
                }}
            />
            <Drawer.Screen 
                name={DrawerEnums.goals} 
                options={{
                    headerShown: false,
                    drawerLabel: 'My Goals',
                }}
                listeners={() => ({
                    drawerItemPress: (e) => {
                        e.preventDefault();
                        router.push(`/${TabsEnum.goals}`)
                    }
                })}
            />
            <Drawer.Screen 
                name={DrawerEnums.trends} 
                options={{
                    headerShown: false,
                    drawerLabel: 'Trends',
                }}
                listeners={() => ({
                    drawerItemPress: (e) => {
                        e.preventDefault();
                        router.push(`/${TabsEnum.trends}`)
                    }
                })}
            />
            <Drawer.Screen 
                name={DrawerEnums.faqs} 
                options={{
                    headerShown: false,
                    drawerLabel: 'FAQs',
                }}
            />
        </Drawer>
    );
}

export default DrawerLayout;