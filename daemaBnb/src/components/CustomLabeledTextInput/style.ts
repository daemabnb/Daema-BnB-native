import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const StyledLabel = styled.Text`
  color: #484848;
  font-size: 12px;
  font-weight: 800;
`;

export const StyledTextInput = styled.TextInput`
  border-radius: 4px;
  border-width: 1px;
  border-color: #ebebeb;
  padding-left: 12px;
  padding-right: 4px;
  margin-top: 8px;

  &:placeholder {
    color: #767676;
  }
`;

export const StyledTextInputPrice = styled(StyledTextInput)`
  background-image: url();
`;
