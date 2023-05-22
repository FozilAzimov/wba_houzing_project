import React, { useEffect, useState } from 'react';

import { Container, Content } from './style';

import CategoryCard from '../CategoryCard';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

export default function Category () {
  const { REACT_APP_SECRET_URL: url } = process.env;

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
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []))
  }, [url])

  return (
    <Container>
      <Content>
        <div className='title'>Category</div>
        <div className='info'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
      </Content>

      <Slider {...settings}>
        {
          data.map(value => {
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