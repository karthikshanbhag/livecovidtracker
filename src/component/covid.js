import React, { useEffect,useState } from 'react'
import './covid.css'

const Covid = () => {
    const [data, setdata] = useState([])
    const  getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json(); 
            console.log(actualData.statewise[0])
            setdata(actualData.statewise[0])
        } catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])
  return (
    <>  
        <section>
        <h1>&#128308;LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
            <div className="row">
            <li className="card">
                <div className="card_main">
                    <div className="class_inner">
                        <p className="card_name"><span> OUR </span> COUNTRY </p>
                        <p className="card_total card__small">INDIA</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="class_inner">
                        <p className="card_name"><span> TOTAL </span> RECOVERED </p>
                        <p className="card_total card__small">{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="class_inner">
                        <p className="card_name"><span> TOTAL </span> CONFIRMED </p>
                        <p className="card_total card__small">{data.confirmed}</p>
                    </div>
                </div>
            </li>
            </div>
           
            <div className="row">
            <li className="card">
                <div className="card_main">
                    <div className="class_inner">
                        <p className="card_name"><span> TOTAL </span> DEATH </p>
                        <p className="card_total card__small">{data.deaths}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="class_inner">
                        <p className="card_name"><span> TOTAL </span> ACTIVE </p>
                        <p className="card_total card__small">{data.active}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="class_inner">
                        <p className="card_name"><span> LAST </span> UPDATED </p>
                        <p className="card_total card__small">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
            </div>
        </ul>
        </section>
    </>
  )
}

export default Covid