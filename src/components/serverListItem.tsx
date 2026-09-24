import { TouchableOpacity, StyleSheet, Text, Image, View, ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ServerListItemProps = {
    icon: ImageSourcePropType;
    name: string;
    role: string;
    onPress?: () => void;
}

export default function ServerListItem({ icon, name, role, onPress }: ServerListItemProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.7}>
            <Image source={icon} style={styles.icon} resizeMode="cover" />

            <View style={styles.textBlock}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.role}>{role}</Text>
            </View>

            <Ionicons name="chevron-forward" size={18} color="rgba(150, 160, 200, 1)" />
        </TouchableOpacity>
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
    icon: {
        width: 56,
        height: 56,
        borderRadius: 10,
    },
    textBlock: {
        flex: 1,
        gap: 2,
    },
    name: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        color: "#FFFFFF",
    },
    role: {
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        color: "rgba(150, 160, 200, 1)",
    },
})
