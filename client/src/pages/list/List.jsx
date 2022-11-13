import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import SearchItem from '../../components/searchitem/SearchItem'
import "./list.css"
import useFetch from '../../hooks/useFetch'
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range"
import { format } from "date-fns";
import { useContext, useState } from "react";
import { useLocation } from 'react-router-dom'



const List = () => {

    
    const { data, loading, error, reFetch } = useFetch(`/locations?location={location}`)
    
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [dates, setDates] = useState(location.state.dates);
    const [openDate, setOpenDate] = useState(false);


      
  return (
    <div>
        <Navbar/>
        <Header type="list"/>
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                        <label>Destination</label>
                        <input type="text" placeholder="destination" />
                    </div>
                  

                    
                </div>

               
                
                <div className="listResult">
        
                    {
                      <>{
                        data.map(item => (
                            <SearchItem item = {item} key={item._id}/>
                        ))
                    }
                    </>}
                </div>
            </div>
        </div>
    </div>
  )
  }
export default List