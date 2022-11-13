import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import useFetch from '../../hooks/useFetch'


import "./Service.css"

import { useLocation } from 'react-router-dom'
const Service = () => {
  const location = useLocation();
  const path = location.split("/")[2]
  const { data, loading, error, refetch } = useFetch(`/locations/{path}`)

  return (
    <div>
        <Navbar/>
        <Header type = "list"/>
        {loading ? "loading" : 
        (<div className="service">
            <div className="serviceContainer">
                <h1 className="hotelTitle">{data.name}</h1>
                <p>Are you sure you want to book?</p>
                <button className="bookNow">Reserve or Book Now!</button>
        </div>
        </div>
    )}
    </div>
  )
}

export default Service