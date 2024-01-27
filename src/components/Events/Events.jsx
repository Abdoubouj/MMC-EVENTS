import React, { useEffect } from 'react'
import "./Events.scss"
import { events } from '../../data/events'
import EventCard from '../Event/EventCard'
const Events = ({type}) => {
    useEffect(()=>{
        window.scroll(0,0);
    },[])
  return (
    <section className='events_section'>
        <div className="events_container">
          {type === "all" ? 
        <h1 className='all_events_heading'>All Events</h1>
        :<h1 className='latest_events_heading'>Latest Events</h1>}
        <div className="latest_events_items">
          {events.map((event)=>(
            <EventCard event={event} key={event.id}/>
             ))}
        </div>
        </div>
    </section>
  )
}

export default Events