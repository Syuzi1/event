import './panel.css'
import Categoreis from "./buttons";
import {BrowserRouter,  NavLink} from 'react-router-dom';



function Panel(){
    return(
        <BrowserRouter>
        
        <div className="panel">
            
            {Categoreis.map((event)=>{
            return <div className={`link-div-${event.id}`}key={event.id}><NavLink className="links" to={event.link}>{event.name}</NavLink>
        </div>
           })}</div>
           
           <div className='mejtex'></div>
        </BrowserRouter>
        )
        
}
export default Panel;