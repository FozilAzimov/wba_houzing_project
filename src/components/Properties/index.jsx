import React, { useEffect, useState } from 'react';

import {
  Center,
  Container,
  Wrapper
} from './style';

import { useLocation, useNavigate } from 'react-router-dom';
import HouseCard from '../HouseCard';
import Button from '../Generic/Button';

export default function Properties () {
  const { REACT_APP_SECRET_URL: url } = process.env;

  const { search } = useLocation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.json())
      .then(res => setData(res?.data || []))
    // eslint-disable-next-line
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  }

  return (
    <Wrapper>
      <Center>
        <div className="title">Properties</div>
        <div className="info">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
      </Center>
      <Container>
        {
          data?.map((value) => {
            return <HouseCard
              key={value.id}
              onClick={() => onSelect(value.id)}
              data={value} />
          })
        }
      </Container>
      <Center>
        <Button width={250}>Show more</Button>
      </Center>
    </Wrapper>
  )
}
