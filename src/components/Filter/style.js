import styled from "styled-components";

import { ReactComponent as houz } from "../../assets/icons/houz.svg";
import { ReactComponent as filter } from "../../assets/icons/filter.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

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
display: flex;
padding: var(--padding);
padding-top: 10px;
padding-bottom: 10px;
gap: 20px;
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

export {
  Container,
  Icons,
  MenuWrapper,
  Section,
}