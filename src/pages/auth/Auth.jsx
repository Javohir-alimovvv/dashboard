import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStore } from '../../zustend/index'

const Auth = () => {
    const token = useStore(state => state.token)

    return token ? <Outlet /> : <Navigate replace to={"/login"} />
}

export default Auth