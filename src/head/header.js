import react from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import './header.css';
import { useState } from 'react';
import dataa from './data';
function Heads() {
    
    const [events, setEvents] = useState([]);
    const hendelChang = (evt) => {
        const { value } = evt.target
        const ress = dataa.filter(item => item.name.includes(value) || item.adress.includes(value))
        console.log(value.length ===0)
        setEvents(ress)
        if(value.length === 0){
            setEvents([])
        }
    }
    console.log(events)
    return (
        <BrowserRouter>
            <div className="Background">

                <div className="LeftPart">

                    <NavLink to="/home"><div className="nkar"></div></NavLink>

                </div>

                <div className="RightPart">
                    <div className='tellnum'>
                        <span className="patvirel">Պատվիրելու համար զանգահարել</span><p className="heraxos">+374 60 276000</p>
                    </div>
                    <div className="searchdiv">




                        <input className="search" type="text" placeholder="Փնտրել" onChange={hendelChang} />
                        {events.length?<div className="serchLsit">
                            {events.map((e, i) => {
                                return <div key={i}>
                                    <p><h3>Event</h3> {e.name}</p>
                                    <p><h3>Address</h3> {e.adress}</p>
                                    <hr />
                                </div>
                            })}
                        </div>:null}




                    </div>

                    <div className="linker">
                        <NavLink to="/Մուտք/գործել">Մուտք գործել</NavLink>
                        <NavLink to="/Գրանցվել">Գրանցվել</NavLink>

                    </div>
                </div>
            </div>
        </BrowserRouter>




    )
}
export default Heads