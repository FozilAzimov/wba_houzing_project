import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { navbar } from '../utils/navbar';
import Navbar from '../components/Navbar';

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
      <Route path='*' element={<h1>404 Error. NOT FOUND</h1>} />
      <Route path='/' element={<Navigate to={'/home'} />} />
    </Routes>
  )
}
