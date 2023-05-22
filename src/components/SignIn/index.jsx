import React, { useState } from 'react';

import {
  CheckInput,
  CheckOut,
  Container,
  Content,
  FormTitle,
  Input,
  Label,
  Link,
  Wrapper
} from './style';

import Button from '../Generic/Button';
import { message } from 'antd';
import useRequest from '../../hooks/useRequest';
import { useNavigate } from 'react-router-dom';

export default function SignIn () {
  const [body, setBody] = useState({});
  const [error, setError] = useState(false);
  const request = useRequest();
  const navigate = useNavigate()

  const onChange = ({ target: { value, type } }) => {
    setBody({
      ...body,
      [type]: value,
    })
    setError(false);
  }

  const info = () => {
    message.info('Yes!');
  }
  const warning = () => {
    message.warning('No');
  }

  const onSubmit = () => {
    request({ url: `/public/auth/login`, method: 'POST', body, me: true })
      .then((res) => {
        if (res?.authenticationToken) {
          info();
          navigate(`/home`);
          localStorage.setItem('token', res?.authenticationToken);
        }
        else warning();
      })
    console.log(error);
  }

  return (
    <Container>
      <Content>
        <FormTitle>Sign in</FormTitle>
        <Label>Login</Label>
        <Input onChange={onChange} type='email' placeholder='Email...' />
        <Input onChange={onChange} type='password' placeholder='Password' />
        <CheckOut>
          <Wrapper>
            <CheckInput type='checkbox' />Remember me
          </Wrapper>
          <Link>Forgot</Link>
        </CheckOut>
        <Button onClick={onSubmit} width='100%'>Login</Button>
      </Content>
    </Container>
  )
}