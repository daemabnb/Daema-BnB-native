import React from 'react';
import { View, Text } from 'react-native';

import { formatDate } from '../utils/formatDate';

interface Props {
  startDate: Date;
  endDate: Date;
}

const color = 'black';
const CustomDatePresenter: React.FC<Props> = ({ startDate, endDate }) => {
  return (
    <View>
      <Text style={{ color }}>{formatDate(startDate, endDate)}</Text>
    </View>
  );
};

export default CustomDatePresenter;
