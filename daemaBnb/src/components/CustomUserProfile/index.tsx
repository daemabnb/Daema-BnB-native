import React from 'react';
import { TouchableWithoutFeedback, Linking, Alert } from 'react-native';

import {
  CustomUserProfileWrapper,
  UserProfileThumb,
  UserProfileImgCover,
  UserProfileImg,
  FacebookIcon,
  UserNameWrapper,
  UserName,
} from './style';

import facebookPng from '../../assets/facebook.png';

interface Props {
  facebookUrl: string;
  profileSrc: string;
  name: string;
}

const CustomUserProfile: React.FC<Props> = ({
  facebookUrl,
  profileSrc,
  name,
}) => {
  const onClick = () => {
    Linking.canOpenURL(facebookUrl).then(supported => {
      if (supported) {
        Linking.openURL(facebookUrl);
      } else {
        Alert.alert('오류', '페이스북 프로필을 연결할 수 없습니다.');
        console.log("can't open");
      }
    });
  };
  return (
    <CustomUserProfileWrapper>
      <TouchableWithoutFeedback onPress={onClick}>
        <UserProfileThumb>
          <UserProfileImgCover>
            <UserProfileImg
              source={{ uri: profileSrc }}
              resizeMode={'contain'}
            />
          </UserProfileImgCover>
          <FacebookIcon source={facebookPng} />
        </UserProfileThumb>
      </TouchableWithoutFeedback>
      <UserNameWrapper>
        <UserName>{name}</UserName>
      </UserNameWrapper>
    </CustomUserProfileWrapper>
  );
};

export default CustomUserProfile;
