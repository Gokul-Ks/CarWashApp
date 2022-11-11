import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import SearchItem from '../../components/searchitem/SearchItem'
import DatePicker from 'react-datepicker'
import "./list.css"


const List = () => {
    const [startDate, setStartDate] = useState(new Date());
    
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
                        <input type="text" placeholder="Destination" />
                    </div>
                    <div className="lsItem">
                        <label>Check-in Date</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                     </div>   

                    
                </div>

                <div className="listResult">
                    <SearchItem/>
                    <SearchItem/>
                </div>
            </div>
        </div>
    </div>
  )
  }
export default List