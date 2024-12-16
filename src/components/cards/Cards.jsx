import React from 'react'
import "./Cards.scss"
import { IoWallet, IoDocumentText  } from "react-icons/io5";
import { FaGlobe, FaShoppingCart  } from "react-icons/fa";

const Cards = () => {
  return (
    <>
    
    <div className='card'>
        <div className='card__box'>
            <div>
                <p className='card__box__text'>Today’s Money</p>
                <h3 className='card__box__money'>$53,000 <span>+55%</span></h3>
            </div>
            <button className='card__box__btn'><IoWallet /></button>
        </div>
        <div className='card__box'>
            <div>
                <p className='card__box__text'>Today’s Users</p>
                <h3 className='card__box__money'>2,300 <span>+5%</span></h3>
            </div>
            <button className='card__box__btn'><FaGlobe /></button>
        </div>
        <div className='card__box'>
            <div>
                <p className='card__box__text'>New Clients</p>
                <h3 className='card__box__money'>+3,052 <span>-14%</span></h3>
            </div>
            <button className='card__box__btn'><IoDocumentText  /></button>
        </div>
        <div className='card__box'>
            <div>
                <p className='card__box__text'>Total Sales</p>
                <h3 className='card__box__money'>$173,000<span>+8%</span></h3>
            </div>
            <button className='card__box__btn'><FaShoppingCart  /></button>
        </div>
    </div>
    
    </>
  )
}

export default Cards