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

const getWidth = ({ width }) => {
  if (`${width}`.includes('100%')) return '100%';
  else if (!width) return '130px';
  else return `${width}px`;
}

const Container = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
min-width: ${({ minWidth }) => minWidth ? `${minWidth}px` : '120px'};
cursor: pointer;
transition: all .1s;
font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
width: ${getWidth};
height: ${({ height }) => (height ? `${height}px` : '44px')};
${getType}
:active{
  opacity: .7;
  transition: all .1s;
}
`

export {
  Container,
};