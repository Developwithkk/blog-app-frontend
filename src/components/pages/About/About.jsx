import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div>
      <div className="box">
        <div className="image">
            <img className='img' src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="meeting" />
        </div>
        <div className="details">
            <h1 className='main'>Equity and Investment Advisory </h1>
            <h2 className='secondary'>Since 2020 &copy Rights reserved @ Divine trades</h2>
        </div>
      </div>
      <div className="nav">
        <ul className='navitem'>
            <li>Investing</li>
            <li>Swing Trades</li>
            <li>Scalping</li>
            <li>Options Selling</li>
            <li>Cash</li>
            <li>Arbitrage</li>
            <li>Hedging</li>

            </ul>
      </div>
    </div>
  )
}

export default About
