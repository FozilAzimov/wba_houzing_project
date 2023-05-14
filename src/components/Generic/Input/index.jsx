import React from 'react';

import {
  Container,
  Icon,
  Wrapper
} from './style';

export default function Input ({
  onClick,
  type,
  width,
  height,
  placeholder,
  name,
  icon,
  value,
  dafeultValue
}) {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container
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
}
