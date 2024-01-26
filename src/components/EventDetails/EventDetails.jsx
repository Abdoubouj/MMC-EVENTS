import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
import { events } from '../../data/events';
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded';
import "./EventDetails.scss"
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
            <img src={`../../../../public/${event.image}`} alt="#" />
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
        </main>
        <aside className="event-details-right">
            <div className="recommended-events">
                <h3>Recommended Events</h3>
                <div className="recommended-events-items">
                    {events.filter((e)=> e.id !== parseInt(id)).map((event)=>(
                        <div className="recommended-event-item" key={event.id}>
                            <img src={`../../../../public/${event?.image}`} width={100} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    </div>
  )
}

export default EventDetails