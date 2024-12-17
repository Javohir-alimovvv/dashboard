import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Billing from "../pages/billing/Billing"
import Auth from '../pages/auth/Auth'
import Login from '../pages/login/Login'

const Router = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={<Auth />}>
          <Route path='/layout' element={<Layout />}>
            <Route path='/layout/home' element={<Home />} />
            <Route path='/layout/billing' element={<Billing />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default Router