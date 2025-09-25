import { View } from 'react-native';
import { useAudioPlayer } from 'expo-audio';
import Button from './Button';

const audioMap = {
  lethargic: require('../assets/lethargic/audio.mp3'),
  crisis: require('../assets/crisis/audio.mp3'),
  worried: require('../assets/worried/audio.mp3'),
  angry: require('../assets/angry/audio.mp3'),
};
function MusicMood({ mood }: { mood: string }) {
  const player = useAudioPlayer(audioMap[mood]);
  return (
    <View
      style={{
        boxShadow:
          'inset 0 -3em 3em rgb(0 0 0), 0 0 0 2px purple, 0.2em 0.2em 0.2em rgb(200 0 0)',
        borderRadius: 20,
      }}
    >
      <Button
        label={
          mood !== 'crisis'
            ? mood[0].toUpperCase() + mood.slice(1)
            : 'In a crisis'
        }
        onPress={() => {
          if (player.playing) {
            player.pause();
          } else {
            player.play();
          }
        }}
      ></Button>
    </View>
  );
}

export default MusicMood;
