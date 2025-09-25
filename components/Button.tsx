import { useState } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
  label: string;
  onPress?: () => void;
  style?: any;
};

export default function Button({ style, label, onPress = () => {} }: Props) {
  const [isHover, setHover] = useState(false);

  const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 20,
      fontWeight: isHover ? 'bold' : 'normal',
    },
  });

  return (
    <View style={{ ...styles.buttonContainer, ...style }}>
      <Pressable
        style={styles.button}
        onPress={onPress}
        onHoverIn={() => setHover(true)}
        onHoverOut={() => setHover(false)}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
