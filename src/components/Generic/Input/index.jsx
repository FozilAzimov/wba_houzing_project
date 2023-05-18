import React, { forwardRef } from 'react';

import {
  Container,
  Icon,
  Wrapper
} from './style';

export const Input = forwardRef(({
  onChange,
  onClick,
  type,
  width,
  height,
  placeholder,
  name,
  icon,
  value,
  defaultValue
}, ref) => {

  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container onChange={onChange}
        ref={ref}
        onClick={onClick}
        type={type}
        width={width}
        height={height}
        placeholder={placeholder}
        name={name}
        icon={icon}
        value={value}
        defaultValue={defaultValue}
      />
    </Wrapper>
  )
});

export default Input;