import colors from "@/src/styles/colors";
import globalStyles from "@/src/styles/globalStyles";
import { ReactElement } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const Card = ({children, imagePath}: {children: ReactElement, imagePath: string;}) => {
    const { container, image, backgroundLayer } = CardStyles;

    const imageURL = {uri: imagePath}
    return (
        <View>
            <ImageBackground
                source={imageURL}
                resizeMode="cover"
            >
                <View style={ backgroundLayer }/>
                <View style={ container }>
                    {children}
                </View>
            </ImageBackground>
        </View>
    );
}

export default Card;

const CardStyles = StyleSheet.create({
    container: {
      padding: 8,
      height: 300,
    },
    backgroundLayer: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: globalStyles.container.backgroundColor,
        opacity: .85
    },
    image: {
        opacity: 1
    }
});