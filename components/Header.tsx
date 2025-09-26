import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from './themed-text';
import { usePolling } from '@/store/usePolling';
function Header() {
  const setCurrentQuestion = usePolling(
    (state: any) => state.setCurrentQuestion,
  );
  const resetMoodScore = usePolling((state: any) => state.resetMoodScore);
  const setCompleted = usePolling((state: any) => state.setCompleted);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Designify</Text>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
          }}
        >
          Design your day - Design your mood
        </Text>
      </View>
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
            fontSize: 12,
            padding: 16,
            backgroundColor: 'black',
            borderRadius: 10,
          }}
          type="subtitle"
        >
          User polling!
        </ThemedText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
});

export default Header;
