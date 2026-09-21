import { StyleSheet, Image, View, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type ButtonProps = {
    icon?: ImageSourcePropType;
}

export default function Profile({icon, }: ButtonProps) {
    return (
        <View>
            {icon && (
                <LinearGradient
                    colors={['#243189', '#1B2565']}
                    style={styles.gradientBorder}
                >
                    <View style={styles.profileBox}>
                        <Image source={icon} style={styles.profilePic} resizeMode="cover" />
                    </View>
                </LinearGradient>
            )}
        </View>
    )
}

const BORDER_WIDTH = 1;
const BORDER_RADIUS = 8;

const styles = StyleSheet.create({
    gradientBorder: {
        width: 48,
        height: 48,
        borderRadius: BORDER_RADIUS,
        padding: BORDER_WIDTH,
    },
    profileBox:{
        flex: 1,
        borderRadius: BORDER_RADIUS - BORDER_WIDTH,
        backgroundColor: "#E51C44",
        overflow: "hidden",
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePic:{
        position: "absolute",
        width: 68,
        height: 68,
        top: -3,
        left: -11,
    }
})