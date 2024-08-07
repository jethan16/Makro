import useActiveTab, { TabTitles } from "@/src/hooks/useActiveTab";
import { useNavigation } from "expo-router";

const LogPlaceholder = () => {
    const navigation = useNavigation();
    const { setActiveTab } = useActiveTab()

    return null
    // return (
    //     <View
    //         style={{
    //             flex: 1,
    //             justifyContent: "center",
    //             alignItems: "center",
    //         }}
    //     >
    //         <Button 
    //             title="Go Back"
    //             onPress={() => {
    //                 setActiveTab(TabTitles.home);
    //                 navigation.goBack();
    //             }}
    //         />
    //     </View>
    // );
}

export default LogPlaceholder;