import React from 'react'
import "./EventPartners.scss"
const EventPartners = ({partners}) => {
  return (
    <div className='event-partners-items'>
    {partners.map((partner)=>(
        <div className="event-partner-item">
        <img src={partner.logo} alt="" key={partner.id} />
        </div>
    ))}
    </div>
  )
}

export default EventPartners