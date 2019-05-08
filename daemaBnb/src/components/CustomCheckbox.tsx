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
  onChange: (value: boolean) => void;
  label?: string;
  labelColor?: string;
}

const CustomCheckbox: React.FC<Props> = (
  { isChecked, onChange, label = '', labelColor = '#000' },
) => {
  const valueBindedOnChange = onChange.bind(null, !isChecked);
  return (
    <View style={styles.container}>
      <CheckBox value={isChecked} onChange={valueBindedOnChange} />
      <Text style={{ color: labelColor }}>{label}</Text>
    </View>
  );
};

export default CustomCheckbox;
