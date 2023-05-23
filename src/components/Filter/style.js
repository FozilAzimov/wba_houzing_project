import styled from "styled-components";

import { ReactComponent as houz } from "../../assets/icons/houz.svg";
import { ReactComponent as filter } from "../../assets/icons/filter.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { Select } from 'antd';

const Icons = styled.div``;

Icons.Houz = styled(houz)`
margin-right: 8px;
`;
Icons.Filter = styled(filter)`
margin-right: 8px;
`;
Icons.Search = styled(search)`
margin-right: 8px;
`;

const Container = styled.div`
width: 100%;
background: #fff;
`;
const Wrapper = styled.div`
width: 100%;
max-width: 1440px;
display: flex;
padding: var(--padding);
padding-top: 10px;
padding-bottom: 10px;
gap: 20px;
margin: auto;
background: #fff;
`;

const MenuWrapper = styled.div`
width: 920px;
height: 409px;
padding: 30px;
background: #fff;
`

const Section = styled.div`
display: flex;
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

export {
  Container,
  Icons,
  MenuWrapper,
  Section,
  SelectAntd,
  Wrapper,
}