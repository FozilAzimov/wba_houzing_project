import styled from "styled-components";
import { Tabs } from "antd";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin: 64px auto 16px auto;
`;

const AntTabs = styled(Tabs)`
width: 100%;
max-width: 580px;
`

export {
  AntTabs,
  Container
};
