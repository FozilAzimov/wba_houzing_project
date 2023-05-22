import styled from "styled-components";

import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as email } from "../../assets/icons/email.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as linkeden } from "../../assets/icons/linkeden.svg";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Icons = styled.div``;
Icons.Location = styled(location)`
margin-right: 21px;
width: 30px;
`;
Icons.Phone = styled(phone)`
margin-right: 21px;
`;
Icons.Email = styled(email)`
margin-right: 21px;
`;
Icons.Facebook = styled(facebook)`
margin-right: 35px;
cursor: pointer;
`;
Icons.Twitter = styled(twitter)`
margin-right: 35px;
cursor: pointer;
`;
Icons.Instagram = styled(instagram)`
margin-right: 35px;
cursor: pointer;
`;
Icons.Linkeden = styled(linkeden)`
margin-right: 35px;
cursor: pointer;
`;
Icons.Logo = styled(logo)`
cursor: pointer;
`;
Icons.Arrow = styled(arrow)`
transform: rotate(90deg);
`;

const Container = styled.div`
position: relative;
height: 434px;
background: #0D263B;
margin-top: 48px;
`;

const Wrapper = styled.div`
max-width: 1440px;
width: 100%;
padding: 0 130px;
margin: auto;
margin-top: 48px;
display: flex;
justify-content: space-between;
`

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

Content.Footer = styled.div`
max-width: 1440px;
width: 100%;
padding: 0 130px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
`;

Content.Title = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #fff;
margin-bottom: 32px;
display: flex;
justify-content: start;
width: 100%;
`
Content.Item = styled.div`
display: flex;
justify-content: start;
width: 265px;
margin-bottom: 20px;
color: #fff;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
cursor: pointer;
`
Content.Items = styled.div`
display: flex;
justify-content: start;
width: 100%;
margin-top: 25px;
`

const WrapperInners = styled.div`
max-width: 450px;
width: 100%;
`
const WrapperInner = styled.div`
max-width: 200px;
width: 100%;
`

const Line = styled.div`
height: 1px;
max-width: 1440px;
width: 100%;
margin: auto;
background: rgba(255, 255, 255, 0.15);
`

const FooterContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 90px;
`

const LogoTitle = styled.div`
margin-left: 12px;
color: #fff;
font-weight: ${({ small }) => small ? '400' : '500'};
font-size: ${({ small }) => small ? '14px' : '18px'};
cursor: ${({ small }) => small ? 'auto' : 'pointer'};
`;

const TopButton = styled.button`
width: 45px;
height: 45px;
border-radius: 3px;
margin-left: 73px;
background: #0061DF;
border: none;
:hover{
  cursor: pointer;
}
:active{
  opacity: 0.7;
}
`

export {
  Container,
  Content,
  Icons,
  FooterContent,
  Line,
  LogoTitle,
  Wrapper,
  WrapperInners,
  WrapperInner,
  TopButton,
};