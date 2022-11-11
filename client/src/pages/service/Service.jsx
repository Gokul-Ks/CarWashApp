import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

import "./Service.css"
const Service = () => {
  return (
    <div>
        <Navbar/>
        <Header type = "list"/>
        <div className="service">
            <div className="serviceContainer">
                <h1 className="hotelTitle">Salem One</h1>
                <p>Are you sure you want to book?</p>
                <button className="bookNow">Reserve or Book Now!</button>
        </div>
        </div>
    </div>
  )
}

export default Service