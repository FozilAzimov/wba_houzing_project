import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-auto-flow: row;
grid-template-columns: repeat(auto-fit,minmax(330px, 1fr));
gap: 20px;
padding: var(--padding);
max-width: 1440px;
width: 100%;
margin: auto;
margin-top: 70px;
`;

const Wrapper = styled.div`
margin-top: 16px;
`

const Center = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 48px auto;
`

export {
  Center,
  Container,
  Wrapper
};