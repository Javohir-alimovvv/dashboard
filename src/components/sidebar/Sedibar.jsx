import React from 'react'
import "./Sidebar.scss"
import { IoHome, IoStatsChartSharp, IoBuild, IoDocument } from "react-icons/io5";
import { FaCreditCard, FaUserLarge } from "react-icons/fa6";
import { IoIosRocket, IoMdHelpCircle } from "react-icons/io";
import logo from "../../assets/images/Logo.png"
import { NavLink, Link } from "react-router-dom"
import { useStore } from '../../zustend';

const Sedibar = () => {
  const onLogout = useStore(state => state.logout)

  return (
    <>

      <div className='sedibar_big'>
        <div className='sedibar__content'>
          <Link>
            <img className='logo' src={logo} alt="" />
          </Link>
          <hr className='sedibar__content__border' />
          <ul className='sedibar__content__group'>
            <li>
              <NavLink to={"/layout/home"} className='sedibar__content__group__items'>
                <div className='sedibar__icons'>
                  <IoHome />
                </div>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/layout/billing"} className='sedibar__content__group__items'>
                <div className='sedibar__icons'>
                  <IoStatsChartSharp />
                </div>
                <span> Tables</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/layout/billing"} className='sedibar__content__group__items'>
                <div className='sedibar__icons'>
                  <FaCreditCard />
                </div>
                <span> Billing</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/layout/billing"} className='sedibar__content__group__items'>
                <div className='sedibar__icons'>
                  <IoBuild />
                </div>
                <span> RTL</span>
              </NavLink>
            </li>
            <h3 className='sedibar__content__group__cheklov'>ACCOUNT PAGES</h3>
            <li>
              <NavLink to={"/layout/billing"} className='sedibar__content__group__items'>
                <div className='sedibar__icons'>
                  <FaUserLarge />
                </div>
                <span>Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/layout/billing"} className='sedibar__content__group__items'>
                <div className='sedibar__icons'>
                  <IoDocument />
                </div>
                <span>Sign In</span>
              </NavLink>
            </li>
            <li onClick={onLogout}>
              <NavLink className='sedibar__content__group__items'>
                <div className='sedibar__icons'>
                  <IoIosRocket />
                </div>
                <span> Sign Up</span>
              </NavLink>
            </li>
          </ul>
          <div className='sedibar__content__bottom'>
            <div className='sedibar__content__bottom__query'><IoMdHelpCircle /></div>
            <h3 className='sedibar__content__bottom__title'>Need help?</h3>
            <p className='sedibar__content__bottom__text'>Please check our docs</p>
            <button className='sedibar__content__bottom__btn'>DOCUMENTATION</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Sedibar