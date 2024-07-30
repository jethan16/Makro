import globalStyles from "@/src/styles/globalStyles";
import { StyleSheet, Text, View } from "react-native";

const CardBody = ({children}: {children: string}) => {
    const {container} = CardBodyStyles;
    return (
        <View style={container}>
            <Text style={globalStyles.text}>{children}</Text>
        </View>
    );
}

export default CardBody;

const CardBodyStyles = StyleSheet.create({
    container: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  });