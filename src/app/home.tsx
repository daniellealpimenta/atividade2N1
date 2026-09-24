import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import Profile from "@/components/profile"
import AddButton from '@/components/addButton';
import CategoryCard from '@/components/categoryCard';
import ListComponent from '@/components/listComponent';
import ExitConfirmModal from '@/components/exitConfirmModal';

export default function Home() {
  const router = useRouter();
  const [exitModalVisible, setExitModalVisible] = useState(false);

  const handleExit = () => {
    setExitModalVisible(false);
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileRow}>
            <Profile
              icon={require('@/assets/images/app_images/profile.png')}
              onPress={() => setExitModalVisible(true)}
            />
            <View style={styles.greeting}>
              <Text style={styles.greetingText}>
                Olá, <Text style={styles.greetingName}>Tiago</Text>
              </Text>
              <Text style={styles.greetingSubtitle}>Hoje é dia de vitória</Text>
            </View>
          </View>
          <AddButton
            icon={require('@/assets/images/app_images/icons/vector.png')}
            onPress={() => router.push('/schedule')}
          />
        </View>

        <ScrollView
          horizontal
          style={styles.categoriesScroll}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        >
          <CategoryCard
            icon={require('@/assets/images/app_images/ranqueadaImage.png')}
            text="Ranqueada"
            onPress={() => void 0}
          />
          <CategoryCard
            icon={require('@/assets/images/app_images/dueloImage.png')}
            text="Duelo 1x1"
            onPress={() => void 0}
          />
          <CategoryCard
            icon={require('@/assets/images/app_images/diversaoImage.png')}
            text="Diversão"
            onPress={() => void 0}
          />
          <CategoryCard
            text=""
          />
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Partidas agendadas</Text>
          <Text style={styles.sectionTotal}>Total 6</Text>
        </View>

        <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
          <ListComponent
            icon={require('@/assets/images/app_images/games_images/lol.png')}
            text="Lendários"
            type="Ranqueada"
            date="18/06 às 21:00h"
            userType="Anfitrião"
            onPress={() => router.push('/detail')}
          />
          <ListComponent
            icon={require('@/assets/images/app_images/games_images/redDeadRedemption2.png')}
            text="Yeah, boy"
            type="Diversão"
            date="23/06 às 19:00h"
            userType="Visitante"
            onPress={() => router.push('/detail')}
          />
          <ListComponent
            icon={require('@/assets/images/app_images/games_images/csgo.png')}
            text="Rumo ao topo"
            type="1x1"
            date="20/06 às 09:00h"
            userType="Anfitrião"
            onPress={() => router.push('/detail')}
          />
          <ListComponent
            icon={require('@/assets/images/app_images/games_images/apex.png')}
            text="Bora queimar tudo"
            type="Ranqueada"
            date="20/06 às 14:20h"
            userType="Anfitrião"
            onPress={() => router.push('/detail')}
          />
          <ListComponent
            icon={require('@/assets/images/app_images/games_images/valorant.png')}
            text="Valorosos"
            type="Diversão"
            date="18/06 às 21:00h"
            userType="Anfitrião"
            onPress={() => router.push('/detail')}
          />
        </ScrollView>

        <ExitConfirmModal
          visible={exitModalVisible}
          onCancel={() => setExitModalVisible(false)}
          onConfirm={handleExit}
        />
    </SafeAreaView>
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
    marginHorizontal: 24,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  greeting: {
    gap: 2,
  },
  greetingText: {
    fontFamily: 'Rajdhani_500Medium',
    fontSize: 16,
    color: "rgba(221, 227, 240, 1)",
  },
  greetingName: {
    fontFamily: 'Rajdhani_700Bold',
    color: "#FFFFFF",
  },
  greetingSubtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: "rgba(150, 160, 200, 1)",
  },
  categoriesScroll: {
    flexGrow: 0,
    marginVertical: 40,
  },
  categories: {
    gap: 12,
    paddingHorizontal: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
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
  list: {
    flex: 1,
    marginTop: 24,
  },
});
