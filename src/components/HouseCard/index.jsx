import React, { useContext } from 'react';

import noImg from '../../assets/imgs/noimg.jpeg'

import {
  Container,
  Content,
  Details,
  Divider,
  Icons,
  Img,
  LoveBack,
  Position,
  Wrapper,
} from './style';

import { message } from 'antd';
import { PropertiesContext } from '../../context/properties';
import Button from '../Generic/Button';

export default function HouseCard ({ data = {}, gap, onClick }) {
  const { REACT_APP_SECRET_URL: url } = process.env;

  const [state] = useContext(PropertiesContext);

  const {
    attachments,
    city,
    country,
    category,
    description,
    address,
    houseDetails: { beds, bath, garage, area, room },
    salePrice,
    price,
    favorite,
    id,
  } = data;

  const save = (event) => {
    event?.stopPropagation();
    fetch(`${url}/houses/addFavourite/${id}?favourite=${!favorite}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((res) => {
        if (favorite) res?.success && message.warning('House Deleted');
        else res?.success && message.info('House Added!');
        state.refetch && state.refetch();
      })
  }

  return (
    <Wrapper gap={gap}>
      <Container onClick={onClick}>
        <Position>
          <Button width={73} minWidth={73} fontSize={10} height={23}>FEATURED</Button>
          <Button width={73} minWidth={73} fontSize={10} height={23} type={'black'}>FOR SALE</Button>
        </Position>
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
            <LoveBack onClick={save} favorite={favorite}>
              <Icons.Love onClick={save} favorite={favorite} />
            </LoveBack>
          </Details.Item>
        </Content>
      </Container>
    </Wrapper>
  )
}
