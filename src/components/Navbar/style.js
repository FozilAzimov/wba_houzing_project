import styled from "styled-components";

import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const Main = styled.div`
display: flex;
justify-content: center;
background: var(--colorPrimary);
`

const Wrapper = styled.div`
width: 100%;
/* max-width: 1440px; */
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
`;

const Link = styled(NavLink)`
text-decoration: none;
color: #fff;
padding: 0 32px;
`

export {
  Container,
  Link,
  Logo,
  LogoTitle,
  Main,
  Section,
  Wrapper
}