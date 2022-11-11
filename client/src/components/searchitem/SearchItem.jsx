import React from 'react'

 import "./searchitem.css"
const SearchItem = () => {
  return (
    <div className="searchItem">
        <img 
        src = ""
        alt="Image of the washer center"
        className='siImg'
        />
        <div className="siDesc">
            <h1 className="siTitle">Salem Center 1</h1>
        </div>
        <div className="siDetailTexts">
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>


    </div>
  )
}

export default SearchItem