import React from 'react';

import { Outlet, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';

import {
  Container,
  Link,
  Logo,
  LogoTitle,
  Main,
  Section,
  Wrapper
} from './style';

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
              navbar.map(({ title, path }, index) => {
                return (
                  <Link className={({ isActive }) => isActive && 'active'} key={index} to={path}>
                    {title}
                  </Link>
                )
              })
            }
          </Section>
          <Section>
            <button>Sign in</button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container >
  )
}
