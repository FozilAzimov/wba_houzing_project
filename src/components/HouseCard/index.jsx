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
            <Details.Item>
              <Icons.Bed />
              <div className="info">Bed {beds || 0}</div>
            </Details.Item>
            <Details.Item>
              <Icons.Bath />
              <div className="info">Bath {bath || 0}</div>
            </Details.Item>
            <Details.Item>
              <Icons.Garage />
              <div className="info">Garage {garage || 0}</div>
            </Details.Item>
            <Details.Item>
              <Icons.Ruler />
              <div className="info">Area {area || 0}kv</div>
            </Details.Item>
          </Details>
        </Content>
        <Divider />
        <Content>
          <Details.Item>
            <div className="info"><s>${salePrice || 0}/mo</s></div>
            <div className="subTitle">${price || 0}/mo</div>
          </Details.Item>
          <Details.Item center>
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
