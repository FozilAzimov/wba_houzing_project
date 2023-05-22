import styled from "styled-components";

const Container = styled.div`
height: fit-content;
position: relative;
`;

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

const DefaultHeight = styled.div`
height: 48px;
`;

export {
  Blur,
  Container,
  Content,
  DefaultHeight,
  Img,
};