import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import Profile from "@/components/profile"
import AddButton from '@/components/addButton';

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
        <Profile icon={require('@/assets/images/app_images/profile.png')}/>
        <AddButton icon={require('@/assets/images/app_images/vector.png')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0E1647",
  },
});
