import styled from "styled-components";

const Container = styled.div`
padding: var(--padding);
display: grid;
grid-template-columns: repeat(3, auto);
justify-content: space-between;
gap: 20px;
`;

export { Container }