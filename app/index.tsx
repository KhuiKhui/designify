import { View, StyleSheet, Text } from 'react-native';
import MusicPlayer from '@/components/MusicPlayer';
import Header from '@/components/Header';

export default function Index() {
  return (
    <View style={styles.imageContainer}>
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
    </View>
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
