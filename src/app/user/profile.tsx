import { useGetUserInfo } from "@/src/hooks/useGetUserInfo";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

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
            <Text>Hey {getUserProp('name').first}, here's a little about your profile.</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Goals: </Text>
                {
                    getUserProp('goals').map((goal: string) => (
                        <Text>{goal}, </Text>
                    ))
                }
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Plans: </Text>
                {
                    getUserProp('plans').map((plan: string) => (
                        <Text>{plan}, </Text>
                    ))
                }
            </View>
            <Link href='user/settings' asChild>
                <Button title='Settings' />
            </Link>
        </View>
    );
}


export default Profile;