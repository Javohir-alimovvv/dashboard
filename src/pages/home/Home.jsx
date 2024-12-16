import React from 'react'
import Cards from '../../components/cards/Cards'
import Charts from '../../components/charts/Charts'
import "./Home.scss"

const Home = () => {
  return (
    <>

      <main className='home__big'>
        <Cards />
        <Charts />
      </main>


    </>
  )
}

export default Home