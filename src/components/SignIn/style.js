import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin: 64px auto 16px auto;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: start;
max-width: 580px;
width: 100%;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
padding: 24px 30px 40px 30px;
`

const FormTitle = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #0D263B;
`
const Label = styled.label`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #0D263B;
margin-top: 40px;
`

const getMargin = ({ type }) => {
  switch (type) {
    case 'password': return '40px';
    default: return '0px';
  }
}

const Input = styled.input`
width: 100%;
height: 25px;
outline: none;
padding: 14px 0;
border: none;
font-size: 14px;
font-weight: 400;
margin-top: ${getMargin};
border-bottom: 2px solid #E6E9EC;
:focus{
  columns: #0D263B;
  border-bottom: 2px solid #0061DF;
  padding-left: 2px;
}
`

const CheckOut = styled.div`
width: 100%;
height: 55px;
display: flex;
justify-content: space-between;
align-items: center;
`

const CheckInput = styled.input`
width: 18px;
height: 18px;
border: 2px solid #E6E9EC;
margin-right: 11px;
cursor: pointer;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
`

const Link = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-decoration-line: underline;
color: #0061DF;
cursor: pointer;
`

export {
  CheckInput,
  CheckOut,
  Container,
  Content,
  FormTitle,
  Input,
  Label,
  Link,
  Wrapper
};