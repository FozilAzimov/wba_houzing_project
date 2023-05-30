import React, { useState } from 'react';

import {
  Container,
  Link,
  List,
  Logo,
  LogoTitle,
  Main,
  Menu,
  Nav,
  Section,
  Wrapper
} from './style';

import { Outlet, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import Button from '../Generic/Button';
import Filter from '../Filter';
import Footer from '../Footer';
import { Dropdown } from 'antd';

export default function Navbar () {

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const onClick = () => {
    if (token) { }
    else {
      navigate('/signin')
    }
  }

  const onClicked = ({ target: { dataset: { name } } }) => {
    if (name === 'logout') {
      localStorage.removeItem('token');
      navigate(`/home`);
    }
    else {
      navigate(`${name}`);
    }
  }

  const items = [
    {
      label: (
        <Menu>
          <List onClick={onClicked} data-name='myprofile'>My profile</List>
          <List onClick={onClicked} data-name='favorites'>Favourites</List>
          <List onClick={onClicked} data-name='logout'>Log out</List>
        </Menu>
      )
    }
  ]

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
            <Dropdown
              menu={{ items }} trigger={['click']}
            >
              {
                token
                  ?
                  <Section>
                    <Button onClick={onClick} type='dark' width='128'>
                      <div>Profile</div>
                    </Button>
                  </Section>
                  :
                  <Button onClick={onClick} type='dark' width='128'>Sign in</Button>
              }
            </Dropdown>

          </Wrapper>
        </Main>

        <Filter />
      </Nav>

      <Outlet />
      <Footer />

    </Container >
  )
}
