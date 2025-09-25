import { Text, View } from 'react-native';
import MusicComponent from './MusicComponent';

export const musicList = {
  angry: ['Celestial Distortion', 'Sacrifices', 'Test Run'],
  crisis: ['Down The Rabbit Hole', 'Push Thru', 'Windy Road Back To You'],
  worried: ['All In', 'Clocks', "When You're Alone"],
  lethargic: ['Butterfly', 'Spaghettification', 'Time'],
  happy: ['A Stroll', 'Flutter', 'Pawn'],
  romantic: ['Only me', 'Photos Of Them', 'Rain Rain Go Away'],
};

function MusicList({ mood }: { mood: string }) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 10,
        padding: 10,
        gap: 20,
      }}
    >
      {musicList[mood].map((ls: string) => (
        <MusicComponent mood={mood} name={ls} key={ls} />
      ))}
    </View>
  );
}

export default MusicList;
