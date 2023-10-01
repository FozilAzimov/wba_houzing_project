import React, { useState } from 'react';

import {
  CheckInput,
  CheckOut,
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
  const [, setError] = useState(false);
  const request = useRequest();
  const navigate = useNavigate()

  const onChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
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
    console.log(body);
    request({ url: `/public/auth/login`, method: 'POST', body, me: true })
      .then((res) => {
        if (res?.authenticationToken) {
          info();
          navigate(`/home`);
          localStorage.setItem('token', res?.authenticationToken);
        }
        else warning();
      })
  }

  return (
    <Content>
      <FormTitle>Sign in</FormTitle>
      <Label>Login</Label>
      <Input onChange={onChange} name='email' type='email' placeholder='Email...' />
      <Input onChange={onChange} name='password' type='password' placeholder='Password' />
      <CheckOut>
        <Wrapper>
          <CheckInput type='checkbox' />Remember me
        </Wrapper>
        <Link>Forgot</Link>
      </CheckOut>
      <Button onClick={onSubmit} width='100%'>Login</Button>
    </Content>
  )
}