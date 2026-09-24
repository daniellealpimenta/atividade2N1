import { TouchableOpacity, StyleSheet, Text, Image, View, ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

type ServerSelectProps = {
    onPress?: () => void;
    icon?: ImageSourcePropType;
    text: string;
    style?: StyleProp<ViewStyle>;
}

export default function ServerSelect({ onPress, icon, text, style }: ServerSelectProps) {
    return (
        <LinearGradient
            colors={['rgba(36, 49, 137, 1)', 'rgba(27, 37, 101, 1)']}
            style={[styles.borda, style]}
        >
            <TouchableOpacity onPress={onPress} style={styles.botao} activeOpacity={0.85}>
                <View style={styles.iconBox}>
                    {icon && <Image source={icon} style={styles.icon} resizeMode="cover" />}
                </View>
                <Text style={styles.text}>{text}</Text>
                <Ionicons name="chevron-forward" size={18} color="rgba(150, 160, 200, 1)" />
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    borda: {
        borderRadius: 12,
        padding: 1,
    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        height: 64,
        borderRadius: 11,
        backgroundColor: "rgba(23, 31, 82, 1)",
        paddingHorizontal: 8,
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: "rgba(36, 49, 137, 1)",
    },
    icon: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    text: {
        flex: 1,
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        lineHeight: 18,
        letterSpacing: 0,
        color: "rgba(221, 227, 240, 1)",
    },
})
