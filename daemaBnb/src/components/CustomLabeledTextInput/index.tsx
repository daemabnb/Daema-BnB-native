import React, { FC } from 'react';
import { Container, StyledLabel, StyledTextInput } from './style';

export type TextInputOnChange = (value: string) => void;

export type KeyBoardType =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'visible-password'
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'url'
  | 'number-pad'
  | 'name-phone-pad'
  | 'decimal-pad'
  | 'twitter'
  | 'web-search';

export interface CustomLabeledTextInputProps {
  onChange: TextInputOnChange;
  value: string;
  label?: string;
  placeholder?: string;
  isSecure?: boolean;
  keyboardType?: KeyBoardType;
}

const CustomLabeledTextInput: FC<CustomLabeledTextInputProps> = ({
  onChange,
  value,
  label,
  placeholder,
  keyboardType,
  isSecure = false,
}) => {
  return (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        keyboardType={keyboardType}
      />
    </Container>
  );
};

export default CustomLabeledTextInput;
