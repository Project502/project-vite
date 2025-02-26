import React from 'react'
import Navbar from './Navbar'
import '../css/Home.css'
import homeImage from '/images/homeImage.png'

const Home = () => {
  return (
  <>
    <Navbar />
  
    <div className = 'whole-page'>

      <div className = 'home-page' id='/'> 

        <div className='info'>
          
          <h1>Your Trusted Partner for Profitable Harvests</h1>
          <p>We help farmers cultivate success in the digital age. Our platform provides real-time data, seed-based profit analysis, and actionable insights so you can make smarter decisions for every season.</p>
          <ul>
              <li>Seed Profit Estimation</li>
              <li>Market Insights</li>
              <li>Data-Driven Forecasting</li>
          </ul>
          <button>What We Do?</button>

        </div>     

        <div className='image'>
          {/* <img src={homeImage} alt="Home Image" /> */}
        </div>

      </div>

    </div>
  </>
  )
}

export default Home