import React from 'react'
import "./Events.scss"
import { events } from '../../data/events'
import EventCard from '../Event/EventCard'
const Events = () => {
  return (
    <section className='events_section'>
        <div className="events_container">
        <h1 className='latest_events_heading'>Latest Events</h1>
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