import { StyleSheet, Image, View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import Button from '@/components/button'

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerImages}>
            <Image
                source={require('@/assets/images/app_images/backgroundLogin.png')}
                style={styles.background}
            />
            <Image
                source={require('@/assets/images/app_images/fighterImage.png')}
                style={styles.fighter}
            />
        </View>

        <View style={styles.content}>
            <View style={styles.textBlock}>
                <Text style={styles.mainText}>Conecte-se {'\n'} e organize suas {'\n'}jogatinas</Text>
                <Text style={styles.secondaryText}>Crie grupos para jogar seus games favoritos com seus amigos</Text>
            </View>

            <Button
                icon={require('@/assets/images/app_images/discord-logo.png')}
                text="Entrar com Discord"
                onPress={() => router.push('/splash')}
            />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E1647",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  containerImages: {
    width: '100%',
    height: 360,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  fighter: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-start',
    alignItems: "center",
    paddingBottom: 120,
    gap: 48,
  },
  textBlock: {
    width: 270,
    gap: 16,
    marginTop: -30,
    zIndex: 10,
  },
  mainText:{
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 40,
    lineHeight: 40,
    color: "#DDE3F0",
    textAlign: 'center',
  },
  secondaryText: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 25,
    color: "#DDE3F0",
    textAlign: 'center',
  }
});
