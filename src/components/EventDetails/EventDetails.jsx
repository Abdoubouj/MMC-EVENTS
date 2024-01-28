import React, { useEffect } from 'react'
import {Link, useParams} from "react-router-dom"
import { events } from '../../data/events';
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import "./EventDetails.scss"
import EventPartners from '../EventPartners/EventPartners';
const EventDetails = () => {
    const {id} = useParams();
    const event  = events.find((e)=> e.id === parseInt(id));
    useEffect(()=>{
        window.scroll(0,0);
    },[])
  return (
    <div className="event-details">
        <main className="event-details-left">
            <h1 className='event-title'>{event?.title}</h1>
            <img src={event.image} className='event-image' alt="#" />
            <div className="meta-info">
            <p className='event-adresse'>{event?.adresse},{event?.city}</p>
            <p className='event-date'>
                <span>{event.startDate}</span>
                <span>/</span>
                <span>{event.endDate}</span>
            </p>
            </div>
            <div className="event-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa, nam nesciunt quod explicabo doloremque nostrum fugiat dolorem esse optio deserunt illo nisi maiores. Facilis ipsum harum asperiores dolorem fugit!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa, nam nesciunt quod explicabo doloremque nostrum fugiat dolorem esse optio deserunt illo nisi maiores. Facilis ipsum harum asperiores dolorem fugit!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa, nam nesciunt quod explicabo doloremque nostrum fugiat dolorem esse optio deserunt illo nisi maiores. Facilis ipsum harum asperiores dolorem fugit!</p>
            </div>
            <button className='enroll-btn'><AdsClickRoundedIcon/> Enroll Now</button>
            <div className="event-partners">
                <h1 className='partners-heading'>event Partners</h1>
                <EventPartners partners={event.partners}/>
            </div>
        </main>
        <aside className="event-details-right">
            <div className="recommended-events">
                <h3>Recommended Events</h3>
                <div className="recommended-events-items">
                    {events.filter((e)=> e.id !== parseInt(id)).map((event)=>(
                        <div className="recommended-event-item" key={event.id}>
                            <div className="recommended-event-img">
                              <img src={event?.image} alt="#" />
                            </div>
                            <div className="recommended-event-info">
                              <h5>{event?.title}</h5>
                              <p>{event?.adresse},{event?.city}</p>
                              <Link>Read more <KeyboardDoubleArrowRightIcon/></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    </div>
  )
}

export default EventDetails