import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import Category from '@/components/category';
import Button from '@/components/button';
import ServerSelect from '@/components/serverSelect';
import InputBox from '@/components/inputBox';
import ServerPicker, { Server } from '@/components/serverPicker';

type CategoryKey = 'ranqueada' | 'duelo' | 'diversao';

const SERVERS: Server[] = [
    { id: 'csgo', name: 'Rumo ao topo', role: 'Administrador', icon: require('@/assets/images/app_images/games_images/csgo.png') },
    { id: 'apex', name: 'Bora queimar tudo', role: 'Convidado', icon: require('@/assets/images/app_images/games_images/apex.png') },
    { id: 'rdr2', name: 'Yeah, Boy', role: 'Convidado', icon: require('@/assets/images/app_images/games_images/redDeadRedemption2.png') },
    { id: 'valorant', name: 'Valorosos', role: 'Convidado', icon: require('@/assets/images/app_images/games_images/valorant.png') },
    { id: 'gta', name: 'Rolezão Monstro', role: 'Convidado', icon: require('@/assets/images/app_images/games_images/gta.png') },
    { id: 'minecraft', name: 'Construtores', role: 'Convidado', icon: require('@/assets/images/app_images/games_images/minecraft.png') },
    { id: 'battlefield', name: 'Battle Insane', role: 'Convidado', icon: require('@/assets/images/app_images/games_images/battlefield.png') },
    { id: 'lol', name: 'Lendários', role: 'Convidado', icon: require('@/assets/images/app_images/games_images/lol.png') },
];

export default function Schedule() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    const [category, setCategory] = useState<CategoryKey | null>(null);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');
    const [server, setServer] = useState<Server | null>(null);
    const [serverPickerVisible, setServerPickerVisible] = useState(false);

    const isFormComplete =
        category !== null &&
        server !== null &&
        day.length > 0 &&
        month.length > 0 &&
        hour.length > 0 &&
        minute.length > 0;

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#243189', '#0E1647']} style={[styles.header, { paddingTop: insets.top + 16 }]}>
                <TouchableOpacity onPress={() => router.back()} hitSlop={12}>
                    <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Agendar partida</Text>
                <View style={styles.headerSpacer} />
            </LinearGradient>

            <ScrollView
                contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 40 }]}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Text style={styles.label}>Categoria</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.categories}
                    >
                        <Category
                            icon={require('@/assets/images/app_images/ranqueadaImage.png')}
                            text="Ranqueada"
                            active={category === 'ranqueada'}
                            onPress={() => setCategory('ranqueada')}
                        />
                        <Category
                            icon={require('@/assets/images/app_images/dueloImage.png')}
                            text="Duelo 1x1"
                            active={category === 'duelo'}
                            onPress={() => setCategory('duelo')}
                        />
                        <Category
                            icon={require('@/assets/images/app_images/diversaoImage.png')}
                            text="Diversão"
                            active={category === 'diversao'}
                            onPress={() => setCategory('diversao')}
                        />
                    </ScrollView>
                </View>

                <ServerSelect
                    text={server?.name ?? "Selecione um servidor"}
                    icon={server?.icon}
                    onPress={() => setServerPickerVisible(true)}
                    style={styles.serverSelect}
                />

                <View style={styles.dateTimeRow}>
                    <View style={styles.dateTimeCol}>
                        <Text style={styles.label}>Dia e mês</Text>
                        <View style={styles.inputRow}>
                            <InputBox placeholder="DD" maxLength={2} value={day} onChangeText={setDay} />
                            <Text style={styles.separator}>/</Text>
                            <InputBox placeholder="MM" maxLength={2} value={month} onChangeText={setMonth} />
                        </View>
                    </View>

                    <View style={styles.dateTimeCol}>
                        <Text style={styles.label}>Hora e minuto</Text>
                        <View style={styles.inputRow}>
                            <InputBox placeholder="HH" maxLength={2} value={hour} onChangeText={setHour} />
                            <Text style={styles.separator}>:</Text>
                            <InputBox placeholder="MM" maxLength={2} value={minute} onChangeText={setMinute} />
                        </View>
                    </View>
                </View>

                <View style={styles.descHeader}>
                    <Text style={styles.descLabel}>Descrição</Text>
                    <Text style={styles.maxChars}>Max 100 caracteres</Text>
                </View>
                <TextInput
                    style={styles.textarea}
                    value={description}
                    onChangeText={setDescription}
                    multiline
                    maxLength={100}
                    placeholderTextColor="rgba(150, 160, 200, 1)"
                />

                <Button
                    text="Agendar"
                    onPress={() => router.back()}
                    disabled={!isFormComplete}
                    style={styles.submitButton}
                />
            </ScrollView>

            <ServerPicker
                visible={serverPickerVisible}
                servers={SERVERS}
                onClose={() => setServerPickerVisible(false)}
                onSelect={(selected) => {
                    setServer(selected);
                    setServerPickerVisible(false);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0E1647",
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    headerTitle: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: 'center',
        color: "#FFFFFF",
    },
    headerSpacer: {
        width: 24,
    },
    content: {
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 40,
    },
    label: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        lineHeight: 18,
        letterSpacing: 0,
        color: "#FFFFFF",
        marginBottom: 12,
    },
    categories: {
        gap: 12,
    },
    serverSelect: {
        marginTop: 32,
    },
    dateTimeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 24,
        marginTop: 28,
    },
    dateTimeCol: {
        flex: 1,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    separator: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        color: "rgba(150, 160, 200, 1)",
    },
    descHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 32,
        marginBottom: 12,
    },
    descLabel: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        lineHeight: 18,
        letterSpacing: 0,
        color: "#FFFFFF",
    },
    maxChars: {
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        lineHeight: 17,
        letterSpacing: 0,
        textAlign: 'right',
        color: "rgba(150, 160, 200, 1)",
    },
    textarea: {
        width: 328,
        height: 95,
        borderRadius: 12,
        backgroundColor: "rgba(23, 31, 82, 1)",
        padding: 12,
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        color: "#FFFFFF",
        textAlignVertical: 'top',
    },
    submitButton: {
        width: '100%',
        marginTop: 56,
    },
});
