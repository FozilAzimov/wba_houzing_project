import React, { useState } from 'react';

import {
  Content,
  FormTitle,
  Input,
} from './style';

import Button from '../Generic/Button';
import { message } from 'antd';
import useRequest from '../../hooks/useRequest';
import { useNavigate } from 'react-router-dom';

export default function SignUp () {
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
    request({ url: `/public/auth/register`, method: 'POST', body, me: true })
      .then((res) => {
        if (res) {
          info();
          navigate(`/signin`);
        }
        else warning();
      })
  }

  return (
    <Content>
      <FormTitle>Registration</FormTitle>
      <Input onChange={onChange} name='email' type='email' placeholder='Email...' />
      <Input onChange={onChange} name='firstname' type='text' placeholder='First Name' />
      <Input onChange={onChange} name='lastname' type='text' placeholder='Last Name' />
      <Input onChange={onChange} name='password' type='password' placeholder='Password' />
      <Button onClick={onSubmit} width='100%'>Register</Button>
    </Content>
  )
}