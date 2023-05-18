import styled from "styled-components";

import { ReactComponent as bed } from "../../assets/icons/bed.svg";

const Icons = styled.div``;

Icons.Bed = styled(bed)``;

const Container = styled.div`
width: 100%;
max-width: 280px;
min-width: 230px;
max-height: 380;
min-height: 350;
background: #FFFFFF;
border: 1px solid #E6E9EC;
border-radius: 3px;
position: relative;
:hover{
  cursor: pointer;
  filter: drop-shadow(0 20px 38px rgba(0,0,0,0.06))
  drop-shadow(0 7px 46px rgba(0,0,0,0.06))
  drop-shadow(0 8px 15px rgba(0,0,0,0.06));
}
`;

const Img = styled.img`
width: 100%;
border-radius: 3px;
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
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
border-radius: 3px;
`

const BlurCategory = styled.div`
position: absolute;
left: 0;
right: 0;
bottom: 0;
top: 0;
border-radius: 3px;
background: rgba(0,0,0,0.7);
`

export {
  BlurCategory,
  Container,
  Content,
  Icons,
  Img,
};