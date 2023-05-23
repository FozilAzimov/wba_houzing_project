import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as air } from "../../assets/icons/air.svg";
import { ReactComponent as barbeque } from "../../assets/icons/barbeque.svg";
import { ReactComponent as cable } from "../../assets/icons/cable.svg";
import { ReactComponent as dryer } from "../../assets/icons/dryer.svg";
import { ReactComponent as gym } from "../../assets/icons/gym.svg";
import { ReactComponent as laundry } from "../../assets/icons/laundry.svg";
import { ReactComponent as lawn } from "../../assets/icons/lawn.svg";
import { ReactComponent as microwave } from "../../assets/icons/microwave.svg";
import { ReactComponent as pool } from "../../assets/icons/pool.svg";
import { ReactComponent as refrigerator } from "../../assets/icons/refrigerator.svg";
import { ReactComponent as room } from "../../assets/icons/room.svg";
import { ReactComponent as sauna } from "../../assets/icons/sauna.svg";
import { ReactComponent as shower } from "../../assets/icons/shower.svg";
import { ReactComponent as washer } from "../../assets/icons/washer.svg";
import { ReactComponent as wifi } from "../../assets/icons/wifi.svg";
import { ReactComponent as window } from "../../assets/icons/window.svg";

const Icons = styled.div``;
Icons.Share = styled(share)``;
Icons.Love = styled(love)``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Calendar = styled(calendar)``;

Icons.Air = styled(air)``;
Icons.Barbeque = styled(barbeque)``;
Icons.Dryer = styled(dryer)``;
Icons.Gym = styled(gym)``;
Icons.Lawn = styled(lawn)``;
Icons.Laundry = styled(laundry)``;
Icons.Microwave = styled(microwave)``;
Icons.Refrigerator = styled(refrigerator)``;
Icons.Sauna = styled(sauna)``;
Icons.Pool = styled(pool)``;
Icons.Shower = styled(shower)``;
Icons.Washer = styled(washer)``;
Icons.Wifi = styled(wifi)``;
Icons.Window = styled(window)``;
Icons.Room = styled(room)``;
Icons.Cable = styled(cable)``;

const Container = styled.div``;

const Wrapper = styled.div`
display: flex;
gap: 20px;
max-width: 1440px;
width: 100%;
margin: auto;
padding: var(--padding);
`

const WrapperLeft = styled.div`
max-width: 880px;
min-width: 700px;
width: 100%;
`
const WrapperRight = styled.div`
height: 404px;
width: 280px;
padding: 24px;
`

const User = styled.div`
display: flex;
align-items: center;
margin-bottom: 25px;
`

const UserImg = styled.img`
width: 52px;
height: 52px;
margin-right: 10px;
border-radius: 50%;
border: 1px solid #fff;
cursor: pointer;
box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
:active{
  transform: scale(.95);
}
`;

const UserData = styled.div``;

const InputWrapper = styled.div`
height: 140px;
display: flex;
flex-direction: column;
gap: 10px;
`;

const CheckBox = styled.input`
width: 25px;
height: 25px;
margin-right: 8px;
`

const Parent = styled.div`
display: flex;
margin: 24px 0;
`

const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 8px 0 4px 0;
`

const Icon = styled.div`
display: flex;
align-items: center;
justify-content: ${({ left }) => left && 'right'};
`

const IconBlur = styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
background: #F6F8F9;
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;
margin-left: ${({ top }) => top && '26px'};
cursor: pointer;
:active{
  background: #F0F0F0;
  transform: scale(.9);
}
`

const Subtitle = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #0D263B;
margin: 48px 0 16px 0;
`

const Text = styled.div`
position: relative;
`

const Gradient = styled(Text)`
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .8) 100%);
position: absolute;
top: 0;
z-index: 10;
height: 160px;
width: 100%;
`

const Line = styled.div`
height: 1px;
width: 100%;
margin-top: 48px;
background: #E6E9EC;
`

const LocationContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const LocationItem = styled.div`
height: 64px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;
`

const Items = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Xarita = styled(WrapperLeft)`
height: 416px;
margin-top: 24px;
background: rgba(0,255,0,.1);
`

const FeaturesItems = styled(LocationItem)`
height: 212px;
max-width: 180px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;
`
const FeaturesItem = styled.div`
width: 100%;
display: flex;
align-items: center;
`

export {
  Container,
  Content,
  CheckBox,
  Gradient,
  FeaturesItems,
  FeaturesItem,
  Icon,
  IconBlur,
  Icons,
  InputWrapper,
  Items,
  Line,
  LocationContent,
  LocationItem,
  Parent,
  Subtitle,
  Text,
  User,
  UserImg,
  UserData,
  Xarita,
  Wrapper,
  WrapperLeft,
  WrapperRight
};