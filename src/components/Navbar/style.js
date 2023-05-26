import styled from "styled-components";

import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const Nav = styled.div`
position: sticky;
top: 0;
z-index: 1000;
box-shadow: 0 -5px 25px #999;
`

const Main = styled.div`
display: flex;
justify-content: center;
background: var(--colorPrimary);
`

const Wrapper = styled.div`
width: 100%;
max-width: 1440px;
height: 64px;
display: flex;
align-items: center;
justify-content: space-between;
color: #fff;
padding: var(--padding);
font-size: 16px;
`

const Section = styled.div`
display: flex;
align-items: center;
cursor: ${({ logo }) => logo && 'pointer'};
.active{
  color: #00f5ff;
}
`;

const Logo = styled(logo)`
width: 30px;
& path{
  fill: #fff;
}
`;

const LogoTitle = styled.h3`
margin-left: 12px;
padding-top: 10px;
`;

const Link = styled(NavLink)`
text-decoration: none;
color: #fff;
padding: 0 32px;
`

const Menu = styled.div`
padding: 16px;
width: 130px;
background: #fff;
box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
0px 7px 46px rgba(0, 0, 0, 0.06),
0px 8px 15px rgba(0, 0, 0, 0.06);
display: grid;
flex-direction: column;
align-items: start;
gap: 16px;
border-radius: 2px;
position: absolute;
right: -134px;
top: -47px;
`

const List = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #000;
:hover{
  color: red;
}
`


export {
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
}