import React, { forwardRef } from 'react';

import {
  Container,
  Icon,
  Wrapper
} from './style';

export const Input = forwardRef(({
  onClick,
  type,
  width,
  height,
  placeholder,
  name,
  icon,
  value,
  dafeultValue }, ref) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container
        ref={ref}
        onClick={onClick}
        type={type}
        width={width}
        height={height}
        placeholder={placeholder}
        name={name}
        icon={icon}
        value={value}
        defaultValue={dafeultValue}
      />
    </Wrapper>
  )
});

export default Input;