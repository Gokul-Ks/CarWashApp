import React from 'react'
import { Link } from 'react-router-dom'
 import "./searchitem.css"
const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
        <img 
        src = ""
        alt="Image of the washer center"
        className='siImg'
        />
        <div className="siDesc">
            <h1 className="siTitle">{item.location}</h1>
        </div>
        <div className="siDetailTexts">
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/locations/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>


    </div>
  )
}

export default SearchItem