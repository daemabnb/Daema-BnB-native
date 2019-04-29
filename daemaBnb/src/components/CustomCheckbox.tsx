import React from 'react';
import { StyleSheet, View, CheckBox, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

interface Props {
  isChecked: boolean;
  onChange: () => void;
  label?: string;
  labelColor?: string;
}

const CustomCheckbox: React.FC<Props> = (
  { isChecked, onChange, label = '', labelColor = '#000' },
) => {
  return (
    <View style={styles.container}>
      <CheckBox value={isChecked} onChange={onChange} />
      <Text style={{ color: labelColor }}>{label}</Text>
    </View>
  );
};

export default CustomCheckbox;
