import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import Button from '@/components/button';
import PlayerRow from '@/components/playerRow';

const PLAYERS = [
    {
        id: 'tiago',
        name: 'Tiago Luchtenberg',
        status: 'Disponível' as const,
        avatar: require('@/assets/images/app_images/people_images/person1.jpg'),
        avatarStyle: {
            transform: [{ scaleX: -1 }],
        },
    },
    {
        id: 'rodrigo',
        name: 'Rodrigo Gonçalves',
        status: 'Ocupado' as const,
        avatar: require('@/assets/images/app_images/people_images/person2.png'),
        avatarStyle: {
            position: 'absolute' as const,
            width: 73,
            height: 91,
            top: -20,
            left: -15,
        },
    },
    {
        id: 'diego',
        name: 'Diego Fernandes',
        status: 'Ocupado' as const,
        avatar: require('@/assets/images/app_images/people_images/person3.jpg'),
    },
];

export default function Detail() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
                <TouchableOpacity onPress={() => router.back()} hitSlop={12}>
                    <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Detalhes</Text>
                <TouchableOpacity onPress={() => void 0} hitSlop={12}>
                    <Ionicons name="share-social-outline" size={22} color="#E51C44" />
                </TouchableOpacity>
            </View>

            <View style={styles.hero}>
                <Image
                    source={require('@/assets/images/app_images/backgroundDetail.png')}
                    style={styles.heroImage}
                    resizeMode="cover"
                />
                <LinearGradient
                    colors={['#121D33', '#121D33D3', '#121D339C', '#121D3300']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.heroOverlay}
                />
                <View style={styles.heroContent}>
                    <Text style={styles.heroTitle}>Lendários</Text>
                    <Text style={styles.heroDescription}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Jogadores</Text>
                    <Text style={styles.sectionTotal}>Total {PLAYERS.length}</Text>
                </View>

                <ScrollView style={styles.playersList} showsVerticalScrollIndicator={false}>
                    {PLAYERS.map((player, index) => (
                        <PlayerRow
                            key={player.id}
                            avatar={player.avatar}
                            avatarStyle={player.avatarStyle}
                            name={player.name}
                            status={player.status}
                            style={index === PLAYERS.length - 1 ? styles.lastPlayerRow : undefined}
                        />
                    ))}
                </ScrollView>
            </View>

            <Button
                icon={require('@/assets/images/app_images/discord-logo.png')}
                text="Entrar na partida"
                onPress={() => void 0}
                style={styles.submitButton}
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
        paddingBottom: 16,
    },
    headerTitle: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: 'center',
        color: "#FFFFFF",
    },
    hero: {
        width: '100%',
        height: 234,
        overflow: 'hidden',
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
    heroOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    heroContent: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 24,
        gap: 8,
    },
    heroTitle: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 32,
        color: "#FFFFFF",
    },
    heroDescription: {
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        lineHeight: 20,
        color: "rgba(221, 227, 240, 1)",
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    playersList: {
        flex: 1,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    sectionTitle: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 17,
        color: "#FFFFFF",
    },
    sectionTotal: {
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        color: "rgba(150, 160, 200, 1)",
    },
    lastPlayerRow: {
        borderBottomWidth: 0,
    },
    submitButton: {
        alignSelf: 'center',
        marginBottom: 40,
    },
});
