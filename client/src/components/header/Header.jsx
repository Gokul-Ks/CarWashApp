import React from 'react'
import "./Header.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range"
import { format } from "date-fns";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from 'react-admin';



const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate()

  const {user} = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      navigate("/services")
    } catch (err) {
    }
  };

  const handleSearch = () => {
    navigate("/locations",{state:{destination, dates}})
  };


  return (
    <div className="header">
        <div className="headerContainer">
        {type!=="list" && <><h1 className="headerTitle">
        Washing Done Right
        </h1>
        <p className="headerDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam est, et amet nam quas aperiam nulla omnis ex hic eius provident ratione minus accusamus libero nihil nemo at odio.
            </p>
            {!user && <button className="headerBtn">Sign in / Register</button>}


        <div className="headerSearch">
            <div className="headerSearchItem">
               
                <input type="text" placeholder="Where are you going?" className="headerSearchInput" onChange={(e)=> setDestination(e.target.value )}/>
            </div>

            <div className="headerSearchItem">
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>

            <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleClick}>Search</button>
            </div>
        </div>
        </>}
         </div>
    </div>
  )
}

export default Header