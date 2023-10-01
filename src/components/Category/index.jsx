import React, { useEffect, useState } from 'react';

import { Container, Content } from './style';

import CategoryCard from '../CategoryCard';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

export default function Category () {
  const url = 'http://localhost:8081/api/v1';

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    adaptiveHeight: true,
    dots: true,
    appendDots: (dots) => <h1>{dots}</h1>,
  };

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/categories/list`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((res) => setData(res?.data || []))
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Content>
        <div className='title'>Category</div>
        <div className='info'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
      </Content>

      <Slider {...settings}>
        {
          data?.map(value => {
            return <CategoryCard
              key={value.id}
              onClick={() => navigate(`/properties?category_id=${value?.id}`)}
              data={value} />
          })
        }
      </Slider>
    </Container >
  )
}