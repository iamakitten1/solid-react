import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface MyInputProps {
    type: string;
    placeholder: string;
    variant: string;
    leftAddon?: string |  ReactNode
    rightAddon?: string;
}

const MyInput: React.FC<MyInputProps> = ({ type, placeholder, variant, leftAddon, rightAddon }) => {
  return (
    <InputGroup>
      {leftAddon && <InputLeftAddon children={leftAddon} />}
      <Input type={type} placeholder={placeholder} variant={variant} />
      {rightAddon && <InputLeftAddon children={rightAddon} />}
    </InputGroup>
  );
};

export default MyInput;

