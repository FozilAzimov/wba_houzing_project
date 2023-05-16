import React from 'react';

import noImg from '../../assets/imgs/noimg.jpeg'

import {
  Container,
  Content,
  Details,
  Divider,
  Icons,
  Img,
  LoveBack,
} from './style';

export default function HouseCard ({ url, title, info, bed, bath, garage, ruler }) {

  return (
    <Container>
      <Img src={url || noImg} />
      <Content top>
        <div className="subTitle">{title || 'New Apartment Nice Wiew'}</div>
        <div className="info">{info || 'Quincy St, Brooklyn, NY, USA'}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{bed || 0} Bed</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{bath || 0} Bath</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">{garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{ruler || 0} Ruler</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content>
        <Details.Item>
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Item>
        <Details.Item center>
          <Icons.Resize />
          <LoveBack>
            <Icons.Love />
          </LoveBack>
        </Details.Item>
      </Content>
    </Container>
  )
}
