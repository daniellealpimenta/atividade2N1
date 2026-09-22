import { TouchableOpacity, StyleSheet, Text, Image, View, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type ListComponentProps = {
    onPress?: () => void;
    icon?: ImageSourcePropType;
    text: string;
    type: "Ranqueada" | "1x1" | "Diversão";
    date: string;
    userType: "Visitante" | "Anfitrião";
}

export default function ListComponent({ onPress, icon, text, type, date, userType }: ListComponentProps) {
    const isAnfitriao = userType === "Anfitrião";

    return (
        <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.85}>
            {icon && (
                <LinearGradient
                    colors={['rgba(36, 49, 137, 1)', 'rgba(27, 37, 101, 1)']}
                    style={styles.iconBorder}
                >
                    <Image source={icon} style={styles.icon} resizeMode="cover" />
                </LinearGradient>
            )}

            <View style={styles.content}>
                <View style={styles.textRow}>
                    <Text style={styles.title} numberOfLines={1}>{text}</Text>
                    <Text style={styles.type}>{type}</Text>
                </View>

                <View style={styles.textRow}>
                    <View style={styles.row}>
                        <Image
                            source={require("../../assets/images/app_images/icons/calendar.png")}
                            style={styles.calendarIcon}
                            resizeMode="contain"
                        />
                        <Text style={styles.date}>{date}</Text>
                    </View>

                    <View style={styles.row}>
                        <Image
                            source={
                                isAnfitriao
                                    ? require("../../assets/images/app_images/icons/redUser.png")
                                    : require("../../assets/images/app_images/icons/greenUser.png")
                            }
                            style={styles.userIcon}
                            resizeMode="contain"
                        />
                        <Text style={[styles.userType, isAnfitriao ? styles.host : styles.visitor]}>
                            {userType}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 24,
        paddingVertical: 8,
        marginBottom: 16,
    },
    iconBorder: {
        width: 64,
        height: 68,
        borderRadius: 8,
        padding: 1,
        overflow: 'hidden',
    },
    icon: {
        flex: 1,
        borderRadius: 7,
        width: '100%',
        height: '100%',
    },
    content: {
        flex: 1,
        marginLeft: 12,
        paddingRight: 24,
        paddingBottom: 6,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.08)",
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    title: {
        flex: 1,
        marginRight: 12,
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        color: "rgba(221, 227, 240, 1)",
    },
    date: {
        fontFamily: 'Inter_500Medium',
        fontSize: 13,
        lineHeight: 17,
        color: "rgba(221, 227, 240, 1)",
    },
    calendarIcon: {
        width: 16,
        height: 16,
    },
    userIcon: {
        width: 16,
        height: 16,
    },
    type: {
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        lineHeight: 17,
        color: "rgba(150, 160, 200, 1)"
    },
    userType: {
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        lineHeight: 17,
    },
    host: {
        color: "rgba(255, 59, 92, 1)",
    },
    visitor: {
        color: "rgba(60, 220, 130, 1)",
    },
})
