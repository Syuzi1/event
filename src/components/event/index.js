  
import {useDispatch} from "react-redux";
import {useState} from "react";
import {api} from "../../helpers/api";
export function Event() {
    const getEvents = () => {
        fetch('http://localhost:3001/events')
            .then(res => res.json())
            .then(res => {
                console.log('res', res)

            })
    }

    return (
       <div className="event-content">
           <div className="event-img"></div>
           Event
        </div>
    )
}
