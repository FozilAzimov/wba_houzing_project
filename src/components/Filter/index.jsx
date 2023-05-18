import React, { useRef, useState } from 'react';

import {
  Container,
  Icons,
  MenuWrapper,
  Section,
} from './style';

import { Input, Button } from '../Generic';
import { Dropdown } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import uzeReplace from '../../hooks/useReplace';
import useSearch from '../../hooks/useSearch';

export default function Filter () {

  const [drop, setDrop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipcodeRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minpriceRef = useRef();
  const maxpriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location.pathname}${uzeReplace(name, value)}`)
  }

  const items = [
    {
      label: (<MenuWrapper>
        <h1 className='subtitle'>Address</h1>
        <Section>
          <Input
            onChange={onChange}
            defaultValue={query.get('country')}
            ref={countryRef}
            name='country'
            placeholder='Country' />
          <Input
            onChange={onChange}
            defaultValue={query.get('region')}
            ref={regionRef}
            name='region'
            placeholder='Region' />
          <Input
            onChange={onChange}
            defaultValue={query.get('city')}
            ref={cityRef}
            name='address'
            placeholder='City' />
          <Input
            onChange={onChange}
            defaultValue={query.get('zip_code')}
            ref={zipcodeRef}
            name='zip_code'
            placeholder='Zip Code' />
        </Section>

        <h1 className='subtitle'>Apartment info</h1>
        <Section>
          <Input
            onChange={onChange}
            defaultValue={query.get('rooms')}
            ref={roomsRef}
            name='rooms'
            placeholder='Rooms' />
          <Input
            onChange={onChange}
            defaultValue={query.get('size')}
            ref={sizeRef}
            name='size'
            placeholder='Size' />
          <Input
            onChange={onChange}
            defaultValue={query.get('sort')}
            ref={sortRef}
            name='sort'
            placeholder='Sort' />
        </Section>

        <h1 className='subtitle'>Price</h1>
        <Section>
          <Input onChange={onChange}
            defaultValue={query.get('min_price')}
            ref={minpriceRef} name='min_price'
            placeholder='Min price' />
          <Input onChange={onChange}
            defaultValue={query.get('max_price')}
            ref={maxpriceRef} name='max_price'
            placeholder='Max price' />
        </Section>
      </MenuWrapper>)
    }
  ];

  const getDrop = () => drop ? setDrop(false) : setDrop(true);

  return (
    <Container>

      <Input icon={<Icons.Houz />} placeholder={'Enter an address, neighborhood, city, or Zip code'} />

      <Dropdown menu={{ items }} trigger={['click']} open={drop}>
        <Button type='light' onClick={getDrop}><Icons.Filter /> Advenced</Button>
      </Dropdown>

      <Button><Icons.Search /> Search</Button>

    </Container >
  )
}
