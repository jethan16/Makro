import useActiveTab, { TabTitles } from "@/src/hooks/useActiveTab";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Button, View } from "react-native";

const log = () => {
    const navigation = useNavigation();
    const { setActiveTab } = useActiveTab()

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button 
                title="Go Back"
                onPress={() => {
                    setActiveTab(TabTitles.home);
                    navigation.goBack();
                }}
            />
        </View>
    );
}

export default log;