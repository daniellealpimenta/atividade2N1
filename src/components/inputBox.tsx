import { TextInput, StyleSheet } from "react-native";

type InputBoxProps = {
    value?: string;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    maxLength?: number;
}

export default function InputBox({ value, placeholder, onChangeText, maxLength }: InputBoxProps) {
    return (
        <TextInput
            style={styles.box}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="rgba(150, 160, 200, 1)"
            keyboardType="number-pad"
            maxLength={maxLength}
            textAlign="center"
        />
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        height: 56,
        borderRadius: 8,
        backgroundColor: "rgba(23, 31, 82, 1)",
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        color: "#FFFFFF",
    },
})
