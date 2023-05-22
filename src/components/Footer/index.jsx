import {
  Container,
  Content,
  FooterContent,
  Icons,
  Line,
  LogoTitle,
  TopButton,
  Wrapper,
  WrapperInner,
  WrapperInners
} from './style';

export default function Footer () {

  return (
    <Container>
      <Wrapper>

        <Content>
          <Content.Title>Contact Us</Content.Title>
          <WrapperInners>
            <Content.Item><Icons.Location />329 Queensberry Street, North Melbourne VIC 3051, Australia.</Content.Item>
            <Content.Item><Icons.Phone />+998 (93) 948 4001</Content.Item>
            <Content.Item><Icons.Email />azimovfoziljon0@gmail.com</Content.Item>
            <Content.Items><Icons.Facebook /><Icons.Twitter /><Icons.Instagram /><Icons.Linkeden /> </Content.Items>
          </WrapperInners>
        </Content>
        <Content>
          <Content.Title>Discover</Content.Title>
          <WrapperInner>
            <Content.Item>Chicago</Content.Item>
            <Content.Item>Los Angeles</Content.Item>
            <Content.Item>Miami</Content.Item>
            <Content.Item>New York</Content.Item>
          </WrapperInner>
        </Content>
        <Content>
          <Content.Title>Lists by Category</Content.Title>
          <WrapperInner>
            <Content.Item>Apartments</Content.Item>
            <Content.Item>Condos</Content.Item>
            <Content.Item>Houses</Content.Item>
            <Content.Item>Offices</Content.Item>
            <Content.Item>Retail</Content.Item>
            <Content.Item>Villas</Content.Item>
          </WrapperInner>
        </Content>
        <Content>
          <Content.Title>Lists by Category</Content.Title>
          <WrapperInner>
            <Content.Item>About Us</Content.Item>
            <Content.Item>Terms & Conditions</Content.Item>
            <Content.Item>Support Center</Content.Item>
            <Content.Item>Contact Us</Content.Item>
          </WrapperInner>
        </Content>
      </Wrapper>
      <Line />
      <Content.Footer>
        <FooterContent>
          <Icons.Logo />
          <LogoTitle>Houzing</LogoTitle>
        </FooterContent>
        <FooterContent>
          <LogoTitle small>Copyright © 2021 CreativeLayers. All Right Reserved.</LogoTitle>
          <TopButton><Icons.Arrow /></TopButton>
        </FooterContent>
      </Content.Footer>
    </Container >
  )
}