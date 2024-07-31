import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Button, View } from "react-native";

const log = () => {
    const navigation = useNavigation();

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
                onPress={() => {navigation.goBack()}}
            />
        </View>
    );
}

export default log;