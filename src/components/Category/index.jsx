import React, { useEffect, useState } from 'react';

import { Container } from './style';

import CategoryCard from '../CategoryCard';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

export default function Category () {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "25px",
    slidesToShow: 3,
    speed: 500,
    adaptiveHeight: true,
    dots: true,
    appendDots: (dots) => <h1>{dots}</h1>,
  };

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8081/api/v1/houses/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []))
  }, [])

  return (
    <Container>

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