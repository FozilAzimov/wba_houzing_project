import React from 'react';

import noImg from '../../assets/imgs/noimg.jpeg'
import categoryImg from '../../assets/imgs/category.png'

import {
  BlurCategory,
  Container,
  Content,
  Img,
} from './style';

export default function CategoryCard ({ onClick, data = {} }) {

  const { category } = data;

  return (
    <Container onClick={onClick}>
      <Img src={categoryImg || noImg} />
      <BlurCategory />
      <Content top>
        {category?.name || `Category name`}
      </Content>
    </Container>
  )
}
