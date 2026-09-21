import { TouchableOpacity, StyleSheet, Text, Image, View, ImageSourcePropType } from "react-native";

type AddButtonProps = {
    onPress?: () => void;
    icon?: ImageSourcePropType;
}

export default function AddButton({ onPress, icon }: AddButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.botao} activeOpacity={0.85}>
            {icon && (
                <View>
                    <Image source={icon} style={styles.icon} resizeMode="contain" />
                </View>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: "#E51C44",
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 14,
        height: 14,
    },
})
