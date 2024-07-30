import globalStyles from "@/src/styles/globalStyles";
import { StyleSheet, Text, View } from "react-native";

const CardHeader = ({children}: {children: string;}) => {
    const { container } = CardHeaderStyles;
    return (
        <View style={container}>
            <Text style={globalStyles.text}>{children}</Text>
        </View>
    );
}

export default CardHeader;

const CardHeaderStyles = StyleSheet.create({
    container: { 
        paddingTop: 36,
        paddingBottom: 36,
        paddingLeft: 24,
        paddingRight: 24,
    }
})