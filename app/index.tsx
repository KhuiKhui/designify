import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import MusicPlayer from '@/components/MusicPlayer';
import Header from '@/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

export default function Index() {
  // useEffect(() => {
  //   setInterval(() => {
  //     Notifications.setNotificationHandler({
  //       handleNotification: async () => ({
  //         shouldPlaySound: false,
  //         shouldSetBadge: false,
  //         shouldShowBanner: true,
  //         shouldShowList: true,
  //       }),
  //     });
  //     (Notifications.scheduleNotificationAsync({
  //       content: {
  //         title: 'Look at that notification',
  //         body: "I'm so proud of myself!",
  //       },
  //       trigger: null,
  //     }),
  //       10000);
  //   });
  // }, []);
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <ImageBackground
        source={{ uri: 'https://i.postimg.cc/mkGqRBfV/bg.png' }}
        resizeMode="cover"
        style={styles.imageContainer}
        blurRadius={8}
      >
        <Header />
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <MusicPlayer />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  imageContainer: {
    padding: 8,
    flex: 1,
    width: '100%',
    backgroundImage: "url('https://i.postimg.cc/mkGqRBfV/bg.png')",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  },
});
