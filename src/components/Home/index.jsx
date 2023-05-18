import React, { useEffect, useState } from 'react';

import HomeCrousel from '../Corousel';
import HouseCard from '../HouseCard';

import {
  Container,
} from './style';

export default function Home () {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/v1/houses/list')
      .then((res) => res.json())
      .then((res) => setData(res?.data))
  }, [])


  return (
    <Container>
      <HomeCrousel />
      {
        data.map((value, index) => {
          return <HouseCard key={index} data={value} />
        })
      }
    </Container>
  )
}
