import React, { useEffect, useState } from 'react';

import { Container } from './style';

import { useLocation } from 'react-router-dom';
import HouseCard from '../HouseCard';

export default function Properties () {
  // const { REACT_APP_BASE_URL: { url } } = process.env;

  const { search } = useLocation();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/api/v1/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []))
  }, [search])

  return (
    <Container>
      {
        data.map((value) => {
          return <HouseCard key={value.id} data={value} />
        })
      }
    </Container>
  )
}
