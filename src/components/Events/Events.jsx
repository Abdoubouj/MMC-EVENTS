import React, { useEffect } from 'react'
import "./Events.scss"
import { events } from '../../data/events'
import EventCard from '../Event/EventCard'
import {useDispatch , useSelector} from "react-redux"
import { getEvents } from '../../features/eventSlice'
const Events = ({type}) => {
  const dispatch = useDispatch();
  const latest_events = useSelector((state)=>state.event.events.slice(0,6));
  const all_events = useSelector((state)=>state.event.events);
  const error = useSelector((state)=>state.event.eventsError);
  // const status = useSelector((state)=>state.event.eventsStatus);
    useEffect(()=>{
        window.scroll(0,0);
        dispatch(getEvents());
    },[dispatch])
    console.log(error);
  return (
    <section className='events_section'>
        <div className="events_container">
          {error && <div className='alert alert-danger'>{error}</div>}
          {type === "all" ?
          <>
        <h1 className='all_events_heading'>All Events</h1>
        <div className="latest_events_items">
          {all_events.map((event)=>(
            <EventCard event={event} key={event.evenementId}/>
            ))}
        </div>
            </> 
        :
        <>
        <h1 className='latest_events_heading'>Latest Events</h1>
        <div className="latest_events_items">
          {latest_events.map((event)=>(
            <EventCard event={event} key={event.id}/>
            ))}
        </div>
            </>
          }
        </div>
    </section>
  )
}

export default Events