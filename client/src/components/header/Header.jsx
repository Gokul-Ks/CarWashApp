import React from 'react'
import "./Header.css"
import { useNavigate } from "react-router-dom";



const Header = ({type}) => {

  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      navigate("/services")
    } catch (err) {
    }
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
        <button className="headerBtn">Sign in / Register</button>


        <div className="headerSearch">
            <div className="headerSearchItem">
               
                <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
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