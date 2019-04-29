import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

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
  content?: string;
  color?: string;
  type?: 'bigBtn'|'smallBtn';
  onPress: () => void;
}

const CustomButton:React.FC<Props> = (
    { content = '', color = '#FF5A5F', onPress, type = 'bigBtn' },
  ) => {
  return (
    <View style={styles[type]}>
      <Button title={content} onPress={onPress} color={color}/>
    </View>
  );
};

export default CustomButton;
