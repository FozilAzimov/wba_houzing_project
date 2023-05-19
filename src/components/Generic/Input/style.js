import styled from "styled-components";

const Container = styled.input`
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
min-width: 120px;
font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
width: ${({ width }) => (width ? `${width}px` : '100%')};
height: ${({ height }) => (height ? `${height}px` : '44px')};
outline:none;
border: 1px solid #e6e9ec;
padding-left: ${({ icon }) => icon ? '35px' : '20px'};
transition: all 0.5s;
:hover{
  transition: all 0.5s;
  border: 1px solid var(--backgroundPrimary);
}
:focus{
  transition: all 0.5s;
  border: 1px solid var(--backgroundPrimary);
  box-shadow: 0 0 2px var(--backgroundPrimary)
}
`
const Wrapper = styled.div`
display: flex;
align-items: center;
position: relative;
width: ${({ width }) => (width ? `${width}px` : '100%')};
`

const Icon = styled.div`
position: absolute;
left: 10px;
top: 14px;
`

export {
  Container,
  Icon,
  Wrapper,
};

