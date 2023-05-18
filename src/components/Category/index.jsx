import React from 'react';

import { Container } from './style';

import CategoryCard from '../CategoryCard';
import Slider from "react-slick";
// import { useNavigate } from 'react-router-dom';

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "10px",
  slidesToShow: 4,
  speed: 500,
  arrow: true,
  dots: true,
  appendDots: (dots) => <h1>{dots}</h1>,
};

export default function Category () {

  // const [data, setData] = useState();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`http://localhost:8081/api/v1/categories/list`)
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  // }, [])

  return (
    <Container>
      <Slider {...settings}>

        <CategoryCard />

      </Slider >
    </Container>
  )
}