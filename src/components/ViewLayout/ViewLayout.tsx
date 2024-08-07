import { ReactNode } from "react";
import { View } from "react-native";

const ViewLayout = ({children}: {children: ReactNode}) => {
    return(
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#000'
            }}
        >
            {children}
        </View>
    )
};

export default ViewLayout;