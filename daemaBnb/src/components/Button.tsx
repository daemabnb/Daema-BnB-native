import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { ButtonSize } from '../utils/types';

const styles = StyleSheet.create({
  btn: {
  },
  bigBtn: {
  },
  smallBtn: {
    width: 112,
  },
});

interface Props {
  content: string;
  color: string;
  size: ButtonSize;
  onPress: () => void;
}

const BUTTON:React.SFC<Props> = ({ content, color, onPress, size }) => {
  return (
    <View style={styles[size]}>
      <Button title={content} onPress={onPress} color={color}></Button>
    </View>
  );
};

export default BUTTON;
