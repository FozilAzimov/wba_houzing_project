import styled from "styled-components";

import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";

const Icons = styled.div``;

Icons.Bed = styled(bed)`
  & path{
    fill: #fff;
  }
  cursor: pointer;
  margin: 6px 0;
`;

Icons.Bath = styled(bath)`
  & path{
    fill: #fff;
  }
  cursor: pointer;
  margin: 6px 0;
`;

Icons.Garage = styled(garage)`
  & path{
    fill: #fff;
  }
  cursor: pointer;
  margin: 6px 0;
`;

Icons.Ruler = styled(ruler)`
  & path{
    fill: #fff;
  }
  cursor: pointer;
  margin: 6px 0;
`;


const Container = styled.div`
height: fit-content;
position: relative;
`;

const getRotate1 = ({ arrow }) => {
  switch (arrow) {
    case 'right': return 'rotate(180deg)';
    default: return;
  }
}
const getRotate2 = ({ arrow }) => {
  switch (arrow) {
    case 'left': return '32px';
    default: return;
  }
}
const getRotate3 = ({ arrow }) => {
  switch (arrow) {
    case 'right': return '32px';
    default: return;
  }
}

const Arrow = styled(arrow)`
height: 45px;
width: 45px;
padding: 16px;
border-radius: 50%;
background: rgba(255,255,255,.2);
position: absolute;
z-index: 999;
top: 50%;
left: ${getRotate2};
right: ${getRotate3};
transform: ${getRotate1};
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
margin-bottom: 48px;
`

const Details = styled.div`
max-width: 337px;
min-width: 300px;
width: 100%;
max-height: 47px;
min-height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
margin: 24px 0;
`

Details.Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`


export {
  Arrow,
  Blur,
  Container,
  Content,
  Details,
  Img,
  Icons,
};