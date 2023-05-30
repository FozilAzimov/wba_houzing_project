import React, { useContext } from 'react';

import {
  Center,
  Container,
  Wrapper
} from './style';

import { useLocation, useNavigate } from 'react-router-dom';
import HouseCard from '../HouseCard';
import Button from '../Generic/Button';
import { useQuery } from 'react-query';
import { PropertiesContext } from '../../context/properties';


export default function Properties () {
  const { REACT_APP_SECRET_URL: url } = process.env;

  const { search } = useLocation();
  const navigate = useNavigate();

  const [, dispatch] = useContext(PropertiesContext);

  const { refetch, data } = useQuery([search], async () => {

    const res = await fetch(`${url}/houses/getAll/favouriteList`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return await res.json();

  },

    {
      onSuccess: () => dispatch({ type: 'refetch', payload: refetch }),
    }
  );


  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  }

  return (
    <Wrapper>
      <Center>
        <div className="title">Favourites</div>
        <div className="info">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
      </Center>
      <Container>
        {data?.data?.length
          ? data?.data.map((value) => {
            return <HouseCard
              key={value.id}
              onClick={() => onSelect(value.id)}
              data={value} />
          })
          :
          <h1>No Data Found</h1>
        }
      </Container>
      <Center>
        <Button width={250}>Show more</Button>
      </Center>
    </Wrapper>
  )
}
