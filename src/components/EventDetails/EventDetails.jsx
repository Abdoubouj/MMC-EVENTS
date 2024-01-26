import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
import { events } from '../../data/events';
import "./EventDetails.scss"
const EventDetails = () => {
    const {id} = useParams();
    const event  = events.find((e)=> e.id === parseInt(id));
    useEffect(()=>{
        window.scroll(0,0);
    },[])
  return (
    <div className="event-details">
        <div className="event-details-left">
            <h1 className='event-title'>{event?.title}</h1>
            <img src={`../../../../public/${event.image}`} alt="#" />
        </div>
        <div className="event-details-right">

        </div>
    </div>
  )
}

export default EventDetails