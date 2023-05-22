import React, { useEffect, useState } from 'react';

import { Container } from './style';

import { useLocation, useNavigate } from 'react-router-dom';
import HouseCard from '../HouseCard';
import useRequest from '../../hooks/useRequest';

export default function Properties () {

  const { search } = useLocation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const request = useRequest();

  useEffect(() => {
    request({ url: `/houses/list${search}` }).then(res => {
      setData(res?.data || []);
    })
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  }

  return (
    <Container>
      {
        data.map((value) => {
          return <HouseCard onClick={() => onSelect(value.id)} key={value.id} data={value} />
        })
      }
    </Container>
  )
}
