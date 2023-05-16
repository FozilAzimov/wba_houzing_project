import styled from "styled-components";

import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
height: 571px;
position: relative;
`;

const Arrow = styled(arrow)`
height: 45px;
width: 45px;
padding: 16px;
border-radius: 50%;
background: rgba(255,255,255,.2);
position: absolute;
z-index: 999;
top: 50%;
left: ${({ gradus }) => !gradus && '32px'};
right: ${({ gradus }) => gradus && '32px'};
transform: ${({ gradus }) => gradus && 'rotate(180deg)'};
cursor: pointer;
:hover{
  background: rgba(255,255,255,.3);
}
`

const Img = styled.img`
width: 100%;
height: 571px;
`

const Blur = styled.div`
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
background: rgba(0,0,0,0.65);
`

const Content = styled.div`
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
`

Content.Title = styled.h1`
color: inherit;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;
letter-spacing: -0.02em;
`

Content.Description = styled.div`
color: inherit;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
`

Content.Price = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.02em;
`

export {
  Arrow,
  Blur,
  Container,
  Content,
  Img
};