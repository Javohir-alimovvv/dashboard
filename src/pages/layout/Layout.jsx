import React from 'react'
import Sedibar from '../../components/sidebar/Sedibar'
import Header from "../../components/header/Header"
import { Outlet } from 'react-router-dom'
import "./Layout.scss"

const Layout = () => {
    return (
        <>

            <div className='layout__route'>
                <div>
                    <Sedibar />
                </div>
                <div className='layout__right'>
                    <Header />
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>

        </>
    )
}

export default Layout