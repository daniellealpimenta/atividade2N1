import { TouchableOpacity, StyleSheet, Text, Image, View, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type CategoryCardProps = {
    onPress?: () => void;
    icon?: ImageSourcePropType;
    text: string;
}

export default function CategoryCard({ onPress, icon, text }: CategoryCardProps) {
    return (
        <LinearGradient
            colors={['rgba(36, 49, 137, 1)', 'rgba(27, 37, 101, 1)']}
            style={styles.borda}
        >
            <LinearGradient
                colors={['#1D2766', '#171F52']}
                style={styles.botao}
            >
                <TouchableOpacity onPress={onPress} style={styles.touchable} activeOpacity={0.85}>
                    {icon && (
                        <View>
                            <Image source={icon} style={styles.icon} resizeMode="contain" />
                        </View>
                    )}
                    <Text style={styles.text}>{text}</Text>
                </TouchableOpacity>
            </LinearGradient>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    borda: {
        width: 104,
        height: 120,
        borderRadius: 8,
        padding: 1,
    },
    botao: {
        flex: 1,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchable: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
    },
    icon: {
        width: 48,
        height: 48,
    },
    text: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 15,
        color: "rgba(221, 227, 240, 1)",
        textAlign: 'center',
        width: 71,
        height: 19,
    }
})
