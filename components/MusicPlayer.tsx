import { View, Text, StyleSheet, Button } from 'react-native';
import MusicMood from './MusicMood';
import { usePolling } from '@/store/usePolling';
import '@expo/match-media';
import { useMediaQuery } from 'react-responsive';

function MusicPlayer() {
  const completed = usePolling((state: any) => state.completed);
  const moodScore = usePolling((state: any) => state.moodScore);

  const isTabletOrMobileDevice = useMediaQuery({
    maxDeviceWidth: 1224,
  });

  function moodAssessment(score: number) {
    if (moodScore < -2) {
      return 'in a crisis';
    } else if (moodScore === -1) {
      return 'angry';
    } else if (moodScore === 0) {
      return 'worried';
    } else if (moodScore === 1) {
      return 'lethargic';
    } else {
      return 'happy';
    }
  }

  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '70%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        padding: 10,
      }}
    >
      {completed ? (
        <Text style={styles.text}>
          According to the polling, you should be {moodAssessment(moodScore)}!
        </Text>
      ) : (
        <Text style={styles.text}>How are you feeling?</Text>
      )}
      {isTabletOrMobileDevice ? (
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <View style={{ display: 'flex', gap: 10 }}>
            <MusicMood mood="lethargic" />
            <MusicMood mood="angry" />
          </View>
          <View style={{ display: 'flex', gap: 10 }}>
            <MusicMood mood="worried" />
            <MusicMood mood="crisis" />
          </View>
        </View>
      ) : (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <View style={{ display: 'flex', gap: 10 }}>
            <MusicMood mood="lethargic" />
            <MusicMood mood="angry" />
          </View>
          <View style={{ display: 'flex', gap: 10 }}>
            <MusicMood mood="worried" />
            <MusicMood mood="crisis" />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    width: 'auto',
  },
  container: {
    padding: 20,
    width: '100%',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
});

export default MusicPlayer;
