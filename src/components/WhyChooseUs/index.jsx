import {
  Container,
  Content,
  Icons,
  Wrapper,
  WrapperInner
} from './style';

export default function WhyChooseUs () {

  return (
    <Container>
      <Content>
        <div className='title'>Why Choose Us</div>
        <div className='info'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
      </Content>
      <Wrapper>
        <Content>
          <Icons.Message />
          <div className="subTitle">Trusted By Thousands</div>
          <WrapperInner>
            <div className="info">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
          </WrapperInner>
        </Content>
        <Content>
          <Icons.Hous />
          <div className="subTitle">Wide Renge Of Properties</div>
          <WrapperInner>
            <div className="info">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
          </WrapperInner>
        </Content>
        <Content>
          <Icons.Calculator />
          <div className="subTitle">Financing Made Easy</div>
          <WrapperInner>
            <div className="info">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
          </WrapperInner>
        </Content>
        <Content>
          <Icons.Maps />
          <div className="subTitle">Trusted By Thousands</div>
          <WrapperInner>
            <div className="info">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
          </WrapperInner>
        </Content>
      </Wrapper>
    </Container >
  )
}