import { TouchableOpacity, StyleSheet, Text, Image, View, ImageSourcePropType } from "react-native";

type ButtonProps = {
    onPress?: () => void;
    text: string;
    icon?: ImageSourcePropType;
}

export default function Button({ onPress, text, icon }: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.botao} activeOpacity={0.85}>
            {icon && (
                <View style={styles.iconBox}>
                    <Image source={icon} style={styles.icon} resizeMode="contain" />
                </View>
            )}
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E51C44",
        width: 274,
        height: 56,
        borderRadius: 8,
        // paddingHorizontal: 8,
    },
    iconBox: {
        width: 56,
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 1,
        borderRightColor: "#991F36"
    },
    icon: {
        width: 24,
        height: 18,
    },
    textButton: {
        flex: 1,
        textAlign: "center",
        color: "#DDE3F0",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 25,
        fontFamily: "Inter",
    },
})
