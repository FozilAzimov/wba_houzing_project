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
  Wrapper,
} from './style';

export default function HouseCard ({ data = {}, gap, onClick }) {

  const {
    attachments,
    city,
    country,
    category,
    description,
    address,
    houseDetails: { beds, bath, garage, area, room },
    salePrice,
    price
  } = data;
  return (
    <Wrapper gap={gap}>
      <Container onClick={onClick}>
        <Img src={(attachments && attachments[0]?.imgPath) || noImg} />
        <Content top>
          <div className="subTitle inline">{city}, {country}, {description}</div>
          <div className="info">{address || 'Quincy St, Brooklyn, NY, USA'} - {category?.name || `Zo'r uy`} Rooms-{room || 0}</div>
          <Details>
            <Details.Item type='center'>
              <Icons.Bed />
              <div className="info">{beds || 0} Bed</div>
            </Details.Item>
            <Details.Item type='center'>
              <Icons.Bath />
              <div className="info">{bath || 0} Bath</div>
            </Details.Item>
            <Details.Item type='center'>
              <Icons.Garage />
              <div className="info">{garage || 0} Garage</div>
            </Details.Item>
            <Details.Item type='center'>
              <Icons.Ruler />
              <div className="info">{area || 0} Sq Ft</div>
            </Details.Item>
          </Details>
        </Content>
        <Divider />
        <Content>
          <Details.Item type='start'>
            <div className="info"><s>${salePrice || 0}/mo</s></div>
            <div className="subTitle">${price || 0}/mo</div>
          </Details.Item>
          <Details.Item type='center' center>
            <Icons.Resize />
            <LoveBack>
              <Icons.Love />
            </LoveBack>
          </Details.Item>
        </Content>
      </Container>
    </Wrapper>
  )
}
