import React, { useEffect, useRef, useState } from 'react';

import {
  Container,
  Icons,
  MenuWrapper,
  Section,
  SelectAntd,
  Wrapper,
} from './style';

import { Input, Button } from '../Generic';
import { Dropdown } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import uzeReplace from '../../hooks/useReplace';
import useSearch from '../../hooks/useSearch';

export default function Filter () {
  const url = 'http://localhost:8081/api/v1';

  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipcodeRef = useRef();

  const roomsRef = useRef();

  const minpriceRef = useRef();
  const maxpriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location.pathname}${uzeReplace(name, value)}`)
  }

  const onChangeSort = (sort) => {
    navigate(`/properties/${uzeReplace('sort', sort)}`)
  }

  const onChangeCategory = (category_id) => {
    navigate(`/properties/${uzeReplace('category_id', category_id)}`)
  }

  const [data, setData] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    fetch(`${url}/categories/list`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.json())
      .then(res => setData(res?.data || []));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let [resoult] = data.filter(ctg => ctg.id === Number(query.get('category_id')));
    resoult?.category?.name && setValue(resoult?.category?.name);
  }, [location?.search, data, query]);

  return (
    <Container>
      <Wrapper>

        <Input icon={<Icons.Houz />} placeholder={'Enter an address, neighborhood, city, or Zip code'} />

        <Dropdown trigger={['click']} dropdownRender={() => {
          return (
            <MenuWrapper>
              <h1 className='subTitle'>Address</h1>
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

              <h1 className='subTitle'>Apartment info</h1>
              <Section>
                <Input
                  onChange={onChange}
                  defaultValue={query.get('room')}
                  ref={roomsRef}
                  name='room'
                  placeholder='Rooms' />

                <SelectAntd
                  defaultValue={query.get('sort') || 'Select Sort'}
                  onChange={onChangeSort}>
                  <SelectAntd.Option value={''}>Select Sort</SelectAntd.Option>
                  <SelectAntd.Option value={'asc'}>O'suvchi</SelectAntd.Option>
                  <SelectAntd.Option value={'desc'}>Kamayuvchi</SelectAntd.Option>
                </SelectAntd>

                <SelectAntd
                  defaultValue={value || 'Select Category'}
                  onChange={onChangeCategory}>
                  <SelectAntd.Option value={''}>Select Category</SelectAntd.Option>
                  {
                    data.map(value => {
                      return <SelectAntd.Option key={value.id} value={value?.id}>
                        {value?.name || 'Select'}
                      </SelectAntd.Option>
                    })
                  }
                </SelectAntd>
              </Section>

              <h1 className='subTitle'>Price</h1>
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
            </MenuWrapper>
          )
        }} >
          <Button type='light'>
            <Icons.Filter /> Advenced
          </Button>
        </Dropdown>

        <Button><Icons.Search /> Search</Button>

      </Wrapper>
    </Container >
  )
}
