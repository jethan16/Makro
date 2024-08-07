import ViewLayout from "@/src/components/ViewLayout/ViewLayout";
import { useGetUserInfo } from "@/src/hooks/useGetUserInfo";
import { Text } from "react-native";

const Profile = () => {
    const { getUserProp } = useGetUserInfo();

    return (
        <ViewLayout>
            <Text>User Profile Screen</Text>
        </ViewLayout>
    );
}


export default Profile;