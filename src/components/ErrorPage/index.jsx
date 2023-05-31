import React from 'react';

import { ErrorImg } from './style';

import error from '../../assets/imgs/404-error-page.jpg';

export default function ErrorPage () {
  return (
    <>
      <ErrorImg src={error} />
    </>
  )
}