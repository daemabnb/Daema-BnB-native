import styled from 'styled-components/native';

export const CustomUserProfileWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: stretch;
`;

export const UserProfileThumb = styled.View`
  height: 88;
  width: 88;
`;

export const UserProfileImgCover = styled.View`
  height: 88;
  width: 88;
  border-radius: 44;
  border-width: 0;
  overflow: hidden;
`;

export const UserProfileImg = styled.Image`
  height: 88;
  width: 88;
`;

export const FacebookIcon = styled.Image`
  position: absolute;
  height: 23;
  width: 23;
  right: 0;
  bottom: 0;
`;

export const UserNameWrapper = styled.View`
  height: 88;
  flex: 1;
  justify-content: center;
`;

export const UserName = styled.Text`
  margin-left: 24;
  font-size: 14;
  font-weight: 800;
`;
