import { View, Text, StyleSheet } from 'react-native';
import '@expo/match-media';
import { useMediaQuery } from 'react-responsive';
import MusicList from './MusicList';
import { Link } from 'expo-router';
import { ThemedText } from './themed-text';
import { usePolling } from '@/store/usePolling';

function MusicPlayer() {
  const completed = usePolling((state: any) => state.completed);
  const moodScore = usePolling((state: any) => state.moodScore);

  const isTabletOrMobileDevice = useMediaQuery({
    maxDeviceWidth: 1224,
  });

  const setCurrentQuestion = usePolling(
    (state: any) => state.setCurrentQuestion,
  );

  const resetMoodScore = usePolling((state: any) => state.resetMoodScore);
  const setCompleted = usePolling((state: any) => state.setCompleted);

  function moodAssessment() {
    if (moodScore < -2) {
      return 'crisis';
    } else if (moodScore === -1) {
      return 'angry';
    } else if (moodScore === 0) {
      return 'worried';
    } else if (moodScore === 1) {
      return 'lethargic';
    } else if (moodScore === 2) {
      return 'happy';
    } else {
      return 'romantic';
    }
  }

  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        boxShadow: '4px 4px',
        width: '70%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        padding: 10,
        borderRadius: 20,
      }}
    >
      {completed ? (
        <Text style={styles.text}>
          According to our analysis, you should be feeling{' '}
          {moodAssessment() !== 'crisis' ? moodAssessment() : 'in a crisis'}.
        </Text>
      ) : (
        <>
          <Text style={styles.text}>How are you feeling?</Text>
          <Link
            onPress={() => {
              resetMoodScore();
              setCurrentQuestion(1);
              setCompleted(false);
            }}
            href="/polling"
          >
            <ThemedText
              style={{
                fontSize: 20,
                padding: 16,
                backgroundColor: 'black',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'purple',
              }}
              type="subtitle"
            >
              User polling!
            </ThemedText>
          </Link>
        </>
      )}
      {completed && (
        <Text style={{ ...styles.text, fontSize: 20 }}>
          We recommend listening to these tracks!
        </Text>
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
          {completed && <MusicList mood={moodAssessment()} />}
        </View>
      ) : (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            width: '50%',
          }}
        >
          {completed && <MusicList mood={moodAssessment()} />}
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
