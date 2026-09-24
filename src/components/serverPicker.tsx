import { Modal, TouchableOpacity, StyleSheet, View, FlatList, ImageSourcePropType } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ServerListItem from "@/components/serverListItem";

export type Server = {
    id: string;
    name: string;
    role: string;
    icon: ImageSourcePropType;
}

type ServerPickerProps = {
    visible: boolean;
    servers: Server[];
    onClose: () => void;
    onSelect: (server: Server) => void;
}

export default function ServerPicker({ visible, servers, onClose, onSelect }: ServerPickerProps) {
    const insets = useSafeAreaInsets();

    return (
        <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />

                <View style={[styles.sheet, { paddingBottom: insets.bottom + 24 }]}>
                    <View style={styles.handle} />

                    <FlatList<Server>
                        data={servers}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ServerListItem
                                icon={item.icon}
                                name={item.name}
                                role={item.role}
                                onPress={() => onSelect(item)}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
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
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    sheet: {
        maxHeight: '85%',
        backgroundColor: "#131B4D",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 24,
        paddingTop: 12,
    },
    handle: {
        alignSelf: 'center',
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: "rgba(150, 160, 200, 0.4)",
        marginBottom: 16,
    },
})
