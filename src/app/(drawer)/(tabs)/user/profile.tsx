import { useGetUserInfo } from "@/src/hooks/useGetUserInfo";
import { Text, View } from "react-native";

const Profile = () => {
    const { getUserProp } = useGetUserInfo();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
         <Text>User Profile Screen</Text>
        </View>
    );
}


export default Profile;