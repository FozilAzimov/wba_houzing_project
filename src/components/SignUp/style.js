import styled from "styled-components";

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: start;
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
margin-bottom: 40px;
`

const Input = styled.input`
width: 100%;
height: 25px;
outline: none;
padding: 14px 0;
border: none;
font-size: 14px;
font-weight: 400;
margin-bottom: 40px;
border-bottom: 2px solid #E6E9EC;
:focus{
  columns: #0D263B;
  border-bottom: 2px solid #0061DF;
  padding-left: 2px;
}
`

export {
  Content,
  FormTitle,
  Input,
};