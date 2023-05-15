import React, { useRef } from 'react';

import { Input, Button } from '../Generic';
import { Dropdown } from 'antd';

import {
  Container,
  Icons,
  MenuWrapper,
  Section,
} from './style';


export default function Filter () {

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipcodeRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minpriceRef = useRef();
  const maxpriceRef = useRef();

  const items = [
    {
      label: (<MenuWrapper>
        <h1 className='subtitle'>Address</h1>
        <Section>
          <Input ref={countryRef} placeholder='Country' />
          <Input ref={regionRef} placeholder='Region' />
          <Input ref={cityRef} placeholder='City' />
          <Input ref={zipcodeRef} placeholder='Zip Code' />
        </Section>
        <h1 className='subtitle'>Apartment info</h1>
        <Section>
          <Input ref={roomsRef} placeholder='Rooms' />
          <Input ref={sizeRef} placeholder='Size' />
          <Input ref={sortRef} placeholder='Sort' />
        </Section>
        <h1 className='subtitle'>Price</h1>
        <Section>
          <Input ref={minpriceRef} placeholder='Min price' />
          <Input ref={maxpriceRef} placeholder='Max price' />
        </Section>
      </MenuWrapper>)
    }
  ];

  const onClick = () => {
    console.log("Hello");
  }

  return (
    <Container>

      <Input icon={<Icons.Houz />} placeholder={'Enter an address, neighborhood, city, or Zip code'} />

      <Dropdown menu={{ items, onClick }} trigger={['click']}>
        <Button type='light'><Icons.Filter /> Advenced</Button>
      </Dropdown>

      <Button><Icons.Search /> Search</Button>
    </Container>
  )
}
