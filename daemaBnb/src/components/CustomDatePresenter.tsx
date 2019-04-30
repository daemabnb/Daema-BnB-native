import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  startDate: Date;
  endDate: Date;
  color?: string;
}

const dateFormatter = (start: Date, end: Date): string => {
  return `${start.getMonth() + 1}월 ${start.getDate()}일 ~ ${end.getMonth() + 1}월 ${end.getDate()}일`;
};

const CustomDatePresenter: React.FC<Props> = ({ startDate, endDate, color = 'black' }) => {
  return (
    <View>
      <Text style={{ color }}>
        { dateFormatter(startDate, endDate) }
      </Text>
    </View>
  );
};

export default CustomDatePresenter;
