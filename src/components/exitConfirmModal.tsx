import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ExitConfirmModalProps = {
    visible: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

export default function ExitConfirmModal({ visible, onCancel, onConfirm }: ExitConfirmModalProps) {
    const insets = useSafeAreaInsets();

    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onCancel} />

                <View style={[styles.sheet, { paddingBottom: insets.bottom + 24 }]}>
                    <Text style={styles.title}>
                        Deseja sair do <Text style={styles.brand}>Game<Text style={styles.brandAccent}>Play</Text></Text>?
                    </Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.cancelButton} onPress={onCancel} activeOpacity={0.85}>
                            <Text style={styles.cancelText}>Não</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmButton} onPress={onConfirm} activeOpacity={0.85}>
                            <Text style={styles.confirmText}>Sim</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    sheet: {
        backgroundColor: "#131B4D",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    title: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        color: "#DDE3F0",
        marginBottom: 24,
    },
    brand: {
        color: "#FFFFFF",
    },
    brandAccent: {
        color: "#E51C44",
    },
    actions: {
        flexDirection: 'row',
        gap: 16,
    },
    cancelButton: {
        flex: 1,
        height: 56,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(36, 49, 137, 1)",
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelText: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 16,
        color: "#DDE3F0",
    },
    confirmButton: {
        flex: 1,
        height: 56,
        borderRadius: 8,
        backgroundColor: "#E51C44",
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmText: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 16,
        color: "#FFFFFF",
    },
})
