import { usePlayer } from '@/store/usePlayer';
import { useAudioPlayer } from 'expo-audio';
import { Text, View } from 'react-native';

function MusicComponent({ mood, name }: { mood: string; name: string }) {
  const songDict = {
    lethargic: {
      Butterfly: require('../assets/lethargic/Butterfly.mp3'),
      Spaghettification: require('../assets/lethargic/Spaghettification.mp3'),
      Time: require('../assets/lethargic/Time.mp3'),
    },
    crisis: {
      'Down The Rabbit Hole': require('../assets/crisis/Down The Rabbit Hole.mp3'),
      'Push Thru': require('../assets/crisis/Push Thru.mp3'),
      'Windy Road Back To You': require('../assets/crisis/Windy Road Back To You.mp3'),
    },
    angry: {
      'Celestial Distortion': require('../assets/angry/Celestial Distortion.mp3'),
      Sacrifices: require('../assets/angry/Sacrifices.mp3'),
      'Test Run': require('../assets/angry/Test Run.mp3'),
    },
    worried: {
      'All In': require('../assets/worried/All In.mp3'),
      Clocks: require('../assets/worried/Clocks.mp3'),
      "When You're Alone": require("../assets/worried/When You're Alone.mp3"),
    },
    happy: {
      'A Stroll': require('../assets/happy/A Stroll.mp3'),
      Flutter: require('../assets/happy/Flutter.mp3'),
      Pawn: require('../assets/happy/Pawn.mp3'),
    },
    romantic: {
      'Only me': require('../assets/romantic/Only me.mp3'),
      'Photos Of Them': require('../assets/romantic/Photos Of Them.mp3'),
      'Rain Rain Go Away': require('../assets/romantic/Rain Rain Go Away.mp3'),
    },
  };

  const currentPlayer = usePlayer((state: any) => state.player);
  const player = useAudioPlayer(songDict[mood][name]);
  return (
    <View
      style={{
        width: '100%',
        padding: 12,
        backgroundColor: 'black',
        borderRadius: 10,
        minHeight: 40,
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'purple',
      }}
    >
      <Text
        style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}
        onPress={() => {
          if (player.playing) {
            player.pause();
          } else {
            player.play();
          }
        }}
      >
        {name}
      </Text>
    </View>
  );
}

export default MusicComponent;
