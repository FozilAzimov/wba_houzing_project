import styled from "styled-components";
import { Select } from "antd";
import { ReactComponent as del } from "../../assets/icons/delete.svg";

const Wrapper = styled.div`
padding: var(--padding);
max-width: 1440px;
width: 100%;
margin: 34px auto;
`

const MenuWrapper = styled.div`
width: 100%;
padding: 30px;
background: #fff;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
margin-bottom: 32px;
`

const Section = styled.div`
display: flex;
flex-direction: ${({ column }) => column ? 'column' : 'row'};
margin-top: ${({ flex }) => flex && '30px'};
width: 100%;
gap: 20px;
margin-bottom: 20px;
`

const SelectAntd = styled(Select)`
width: 100%;
min-width: 250px;
max-width: 250px;
height: 44px;
color: var(--colorSecondary);
`;

const IconDel = styled(del)`
cursor: pointer;
margin-left: 20px;
:active{
  & path{
    fill: red;
  }
}
`

export {
  IconDel,
  MenuWrapper,
  Section,
  SelectAntd,
  Wrapper,
};