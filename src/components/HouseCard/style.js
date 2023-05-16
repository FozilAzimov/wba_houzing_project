import styled from "styled-components";

import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Love = styled(love)``;

const Container = styled.div`
height: 429px;
width: 380px;
border-radius: 3px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
:hover{
  cursor: pointer;
  filter: drop-shadow(0 20px 38px rgba(0,0,0,0.06))
  drop-shadow(0 7px 46px rgba(0,0,0,0.06))
  drop-shadow(0 8px 15px rgba(0,0,0,0.06));
}
  margin: 100px;
`;

const Img = styled.img`
width: 100%;
height: 220px;
`

const Content = styled.div`
padding: ${({ top }) => top ? '24px 20px 0 20px' : '8px 20px'};
display: ${({ top }) => !top && 'flex'};
align-items: ${({ top }) => !top && 'center'};
justify-content: ${({ top }) => !top && 'space-between'};
height: ${({ top }) => !top && '60px'};
`

const Details = styled.div`
margin: 16px 0;
display: flex;
justify-content: space-between;
`

Details.Item = styled.div`
height: 44px;
display: flex;
align-items: center;
flex-direction: ${({ center }) => center ? 'row' : 'column'};
justify-content: ${({ center }) => center ? 'center' : 'space-between'};
`

const Divider = styled.div`
height: 1px;
width: 100%;
background: #E6E9EC;
`

const LoveBack = styled.div`
width: 35px;
height: 35px;
background: #F6F8F9;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-left: 20px;
:active{
  background: #F0F0F0;
  transform: scale(.9);
}
`

export {
  Container,
  Content,
  Details,
  Divider,
  Icons,
  Img,
  LoveBack,
};