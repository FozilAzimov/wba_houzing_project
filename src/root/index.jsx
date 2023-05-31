import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { navbar } from '../utils/navbar';
import Navbar from '../components/Navbar';
import ErrorPage from '../components/ErrorPage';

export default function Root () {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {
          navbar.map(({ element, path }, index) => {
            return <Route key={index} path={path} element={element} />
          })
        }
      </Route>
      <Route path='*' element={<ErrorPage />} />
      <Route path='/' element={<Navigate to={'/home'} />} />
    </Routes>
  )
}
