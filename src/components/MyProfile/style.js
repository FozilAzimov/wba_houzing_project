import styled from "styled-components";
import { Table } from "antd";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as del } from "../../assets/icons/delete.svg";

const Icons = styled.div``;
Icons.Edit = styled(edit)`
cursor: pointer;
:active{
  & path{
    fill: blue;
  }
}
`;
Icons.Del = styled(del)`
cursor: pointer;
:active{
  & path{
    fill: red;
  }
}
`;

const Wrapper = styled.div`
padding: var(--padding);
max-width: 1440px;
width: 100%;
margin: 34px auto;
`

const Items = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
margin-top: 32px;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
padding: 24px 30px 48px 30px;
`;

const FonIcon = styled.span`
display: flex;
align-items: center;
`

FonIcon.Content = styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
background: #F6F8F9;
margin-left: 32px;
display: flex;
align-items: center;
justify-content: center;
`;

const User = styled.div`
display: flex;
flex-direction: ${({ flex }) => flex ? 'column' : 'row'};
max-width: ${({ flex }) => flex ? '250px' : '100%'};
width: 100%;
min-width: ${({ flex }) => flex ? '220px' : '100%'};
`

const UserImg = styled.img`
width: 150px;
height: 113px;
border-radius: 3px;
margin-right: 18px;
`

const AntTable = styled(Table)`
cursor: pointer;
`;

export {
  AntTable,
  Container,
  FonIcon,
  Icons,
  Items,
  User,
  UserImg,
  Wrapper,
};