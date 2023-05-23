import React from 'react';

import {
  Container,
  Link,
  Logo,
  LogoTitle,
  Main,
  Nav,
  Section,
  Wrapper
} from './style';

import { Outlet, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import Button from '../Generic/Button';
import Filter from '../Filter';
import Footer from '../Footer';

export default function Navbar () {
  const navigate = useNavigate();

  return (
    <Container>

      <Nav>
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
      </Nav>

      <Outlet />
      <Footer />

    </Container >
  )
}
