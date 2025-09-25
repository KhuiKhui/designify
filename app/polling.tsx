import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import Button from '@/components/Button';
import { usePolling } from '@/store/usePolling';

interface Question {
  question: string;
  answers: [string, number][];
}

export default function ModalScreen() {
  const questions: Question[] = [
    {
      question: 'What are your feelings right now?',
      answers: [
        ['Happy', 1],
        ['Sad', -1],
        ['Anxious', -2],
        ['Excited', 2],
      ],
    },
    {
      question: 'What would you like to eat now?',
      answers: [
        ['Buffet', 2],
        ['Fruits', 1],
        ['Bread', -1],
        ['Not eat anything', -2],
      ],
    },
    {
      question: 'If today was a color, what would it be?',
      answers: [
        ['Red', 2],
        ['Pastel', 1],
        ['Purple', -1],
        ['Black', -2],
      ],
    },
  ];
  const setMoodScore = usePolling((state: any) => state.setMoodScore);
  const setCompleted = usePolling((state: any) => state.setCompleted);
  const currentQuestion = usePolling((state: any) => state.currentQuestion);
  const increaseCurrentQuestion = usePolling(
    (state: any) => state.increaseCurrentQuestion,
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Daily polling!</ThemedText>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 40,
          }}
        >
          {questions.map((q, index) => (
            <>
              {index + 1 === currentQuestion && (
                <>
                  <ThemedText>{currentQuestion}/3</ThemedText>
                  <ThemedText style={styles.question}>{q.question}</ThemedText>
                  <View style={styles.answers}>
                    {q.answers.map((answer) => (
                      <Button
                        key={answer[0]}
                        onPress={() => {
                          setCompleted(false);
                          if (currentQuestion === 3) {
                            setCompleted(true);
                          }
                          setMoodScore(answer[1]);
                          increaseCurrentQuestion();
                        }}
                        style={styles.answerBox}
                        label={answer[0]}
                      />
                    ))}
                  </View>
                </>
              )}
            </>
          ))}
          {currentQuestion === 4 && (
            <ThemedText style={styles.question}>
              You have completed the daily polling!
            </ThemedText>
          )}
        </View>
      </View>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  answerBox: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
  },
  question: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  answers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
