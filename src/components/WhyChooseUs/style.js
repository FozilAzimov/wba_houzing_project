import styled from "styled-components";

import { ReactComponent as message } from "../../assets/icons/message.svg";
import { ReactComponent as hous } from "../../assets/icons/hous.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as maps } from "../../assets/icons/maps.svg";

const Icons = styled.div``;
Icons.Message = styled(message)`
margin-bottom: 24px;
`;
Icons.Hous = styled(hous)`
margin-bottom: 24px;
`;
Icons.Calculator = styled(calculator)`
margin-bottom: 24px;
`;
Icons.Maps = styled(maps)`
margin-bottom: 24px;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 100%;
height: 434px;
margin: auto;
margin-top: 48px;
background: #F5F7FC;
`;

const Wrapper = styled.div`
max-width: 1440px;
width: 100%;
margin: 0 auto 48px auto;
padding: 0 130px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Content = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

const WrapperInner = styled.div`
padding: 8px  44px 0 44px;
display: flex;
flex-direction: column;
align-items: center;
`

export { Container, Content, Icons, Wrapper, WrapperInner };