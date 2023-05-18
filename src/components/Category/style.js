import styled from "styled-components";

import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
position: relative;
padding: 96px 130px;
display: flex;
flex-direction: column;
margin: auto;
max-width: 1440px;
width: 100%;
`;

const Arrow = styled(arrow)`
height: 45px;
width: 45px;
padding: 16px;
border-radius: 50%;
background: #663399;
position: absolute;
z-index: 999;
top: 50%;
left: ${({ right }) => !right && '32px'};
right: ${({ right }) => right && '32px'};
transform: ${({ right }) => right && 'rotate(180deg)'};
cursor: pointer;
:hover{
  background: rgba(255,255,255,.3);
}
`

export {
  Arrow,
  Container,
};