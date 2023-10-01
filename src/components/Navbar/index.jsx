import React from 'react';

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
      navigate('/signin');
    }
  }

  const onClicked = ({ target: { dataset: { name } } }) => {
    if (name === 'logout') {
      localStorage.removeItem('token');
      navigate(`/home`);
    }
    else {
      console.log(name);
      navigate(`${name}`);
    }
  }

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
              trigger={['click']}
              dropdownRender={() => {
                return (
                  <Menu>
                    <List onClick={onClicked} data-name='myprofile'>My profile</List>
                    <List onClick={onClicked} data-name='favorites'>Favourites</List>
                    <List onClick={onClicked} data-name='logout'>Log out</List>
                  </Menu>
                )
              }}
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
