import React from 'react';

import noImg from '../../assets/imgs/noimg.jpeg'
import categoryImg from '../../assets/imgs/category.png'

import {
  BlurCategory,
  Container,
  Content,
  Img,
} from './style';

export default function CategoryCard ({ data: { name } = {} }) {

  return (
    <Container>
      <Img src={categoryImg || noImg} />
      <BlurCategory />
      <Content top>
        {name || `Category name`}
      </Content>
    </Container>
  )
}
