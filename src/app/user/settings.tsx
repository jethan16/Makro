import { useGetUserInfo } from "@/src/hooks/useGetUserInfo";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

const settings = () => {
    const { getUserProp } = useGetUserInfo();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Membership:</Text>
                <Text>{getUserProp('membership')}</Text>
            </View>
            <Link href='user/profile' asChild>
                <Button title='Profile' />
            </Link>
        </View>
    );
}

export default settings;