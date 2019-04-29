import React from 'react';
import { StyleSheet, View, CheckBox, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
  },
});

interface Props {
  isChecked: boolean;
  onToggleCheckbox: () => void;
  label?: string;
  labelColor?: string;
}

const CustomCheckbox: React.FC<Props> = (
  { isChecked, onToggleCheckbox, label = '', labelColor = '#000' },
) => {
  return (
    <View style={styles.container}>
      <CheckBox value={isChecked} onChange={onToggleCheckbox} />
      <Text style={{ ...StyleSheet.flatten({ color: labelColor }) }}>{label}</Text>
    </View>
  );
};

export default CustomCheckbox;
