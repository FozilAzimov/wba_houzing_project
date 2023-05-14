import styled from "styled-components";


const getType = ({ type }) => {
  switch (type) {
    case 'dark':
      return {
        background: 'transparent',
        border: '1px solid #fff',
        color: '#fff'
      };
    case 'light':
      return {
        background: '#fff',
        border: '1px solid #E6E9EC',
        color: '#0D263B'
      };
    case 'primary':
      return {
        background: '#0061DF',
        border: 'none',
        color: '#fff'
      };
    default:
      return {
        background: '#0061DF',
        border: 'none',
        color: '#fff'
      };
  }
}

const Container = styled.input`
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
min-width: 120px;
font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
width: ${({ width }) => (width ? `${width}px` : '100%')};
height: ${({ height }) => (height ? `${height}px` : '44px')};
/* ${getType} */
outline:none;
border: 1px solid #e6e9ec;
padding-left: ${({ icon }) => icon ? '35px' : '20px'};
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

