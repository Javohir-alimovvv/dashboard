import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Billing from "../pages/billing/Billing"

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/billing' element={<Billing />} />
        </Route>
      </Routes>
    </>
  )
}

export default Router