import { StyleSheet, Text, View, Image, ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type PlayerRowProps = {
    avatar: ImageSourcePropType;
    avatarStyle?: StyleProp<ImageStyle>;
    name: string;
    status: 'Disponível' | 'Ocupado';
    style?: StyleProp<ViewStyle>;
}

export default function PlayerRow({ avatar, avatarStyle, name, status, style }: PlayerRowProps) {
    const isAvailable = status === 'Disponível';

    return (
        <View style={[styles.container, style]}>
            <LinearGradient colors={['#243189', '#1B2565']} style={styles.avatarBorder}>
                <View style={styles.avatarBox}>
                    <Image source={avatar} style={[styles.avatarImage, avatarStyle]} resizeMode="cover" />
                </View>
            </LinearGradient>

            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.statusRow}>
                    <View style={[styles.dot, isAvailable ? styles.dotAvailable : styles.dotBusy]} />
                    <Text style={styles.statusText}>{status}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.08)",
    },
    avatarBorder: {
        width: 48,
        height: 48,
        borderRadius: 10,
        padding: 1,
    },
    avatarBox: {
        flex: 1,
        borderRadius: 9,
        overflow: 'hidden',
        backgroundColor: "#0E1647",
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
    info: {
        flex: 1,
        gap: 4,
    },
    name: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        color: "#FFFFFF",
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    dotAvailable: {
        backgroundColor: "rgba(60, 220, 130, 1)",
    },
    dotBusy: {
        backgroundColor: "rgba(255, 59, 92, 1)",
    },
    statusText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        color: "rgba(150, 160, 200, 1)",
    },
})
