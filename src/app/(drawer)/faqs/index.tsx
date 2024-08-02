import { DrawerToggleButton } from "@react-navigation/drawer";
import { useNavigation, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const FAQs = () => {
    const router = useRouter();
    const navigation = useNavigation()

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>FAQs Screen</Text>
            <Button 
                title='Go Home'
                onPress={() => router.push('/home')}    
            />
        </View>
    );
}

export default FAQs;