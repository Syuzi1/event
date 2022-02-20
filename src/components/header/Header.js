import React from 'react';
import Categoreis from './links';
import "./Header.css";
import SearchPanel from './SearchPanel/SerarchPanel';
import { NavLink } from "react-router-dom";





function Header() {
  return (
    <div>
      <div className='header'>
        <div className='tsnox'>
        <div className='dzaxmas'></div>
        <div className='ajmas'><div className='textnam'><span className='text'>Պատվիրելու համար զանգահարել</span>
          <span className='number'>+374 10000000</span> </div>
          <SearchPanel />
             <NavLink to="/Մուտք գործել">Մուտք գործել</NavLink>
             <NavLink to="/Գրանցվել"> Գրանցվել</NavLink>
        </div>
        </div>
        
        <div className="linkContainer">
          {
            Categoreis.map((event)=>{
              return<div className={`link-div-${event.id}`}key={event.id }><NavLink to={event.link}>{event.name}</NavLink></div>
            }
            
            
            )

          
            
          }
        </div>
      </div>
    </div>
  )
}

export default Header;
