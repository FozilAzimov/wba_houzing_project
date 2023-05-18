import React from 'react';

import {
  Container,
  Link,
  Logo,
  LogoTitle,
  Main,
  Section,
  Wrapper
} from './style';

import { Outlet, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import Button from '../Generic/Button';
import Filter from '../Filter';

export default function Navbar () {

  const navigate = useNavigate();

  return (
    <Container>
      <Main>
        <Wrapper>

          <Section logo onClick={() => navigate('/home')}>
            <Logo />
            <LogoTitle>Houzing</LogoTitle>
          </Section>
          <Section>
            {
              navbar.map(({ title, path, hidden }, index) => {
                return !hidden && (
                  <Link className={({ isActive }) => isActive && 'active'} key={index} to={path}>
                    {title}
                  </Link>
                )
              })
            }
          </Section>
          <Section>
            <Button onClick={() => navigate('/signin')} type='dark' width='128'>Sign in</Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
    </Container >
  )
}
