import React from 'react'
import "./Header.css"

const Header = ({type}) => {
  return (
    <div className="header">
        <div className="headerContainer">
        {type!=="list" && <><h1 className="headerTitle">
        A lifetime of discounts? It's Genius.
        </h1>
        <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
        <button className="headerBtn">Sign in / Register</button>


        <div className="headerSearch">
            <div className="headerSearchItem">
               
                <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
            </div>

            <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
            </div>
        </div>
        </>}
         </div>
    </div>
  )
}

export default Header