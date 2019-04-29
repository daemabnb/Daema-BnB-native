import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
  },
});

interface Props {
  color?: string;
}

const Divider: React.FC<Props> = ({ color = '#000' }) => {
  return (
    <View style={StyleSheet.flatten([styles.divider, { borderBottomColor: color }]) }/>
  );
};

export default Divider;
